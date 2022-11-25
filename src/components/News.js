import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&${
      props.query
        ? `q=${props.query}`
        : `category=${props.category}&country=${props.country}&page=${page}`
    }`;
    // const url = `https://newsapi.org/v2/${
    //   props.query ? `everything` : `top-headlines`
    // }?${
    //   props.query
    //     ? `q=${props.query}`
    //     : `country=${props.country}&category=${props.category}&page=${page}`
    // }${``}&apikey=${props.apiKey}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();

    setArticles(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${props.category} - JhunjhunewalaNews`;
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&${
      props.query
        ? `q=${props.query}`
        : `category=${props.category}&country=${props.country}&page=${page + 1}`
    }`;
    // const url = `https://newsapi.org/v2/${
    //   props.query ? `everything` : `top-headlines`
    // }?${
    //   props.query
    //     ? `q=${props.query}`
    //     : `country=${props.country}&category=${props.category}&page=${page + 1}`
    // }${``}&apikey=${props.apiKey}`;
    let data = await fetch(url);
    setPage(page + 1);

    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
        }}
      >
        Jhunjhunewala's - Top {props.category} headlines.
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.link}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.image_url}
                    newsUrl={element.link}
                    author={element.creator}
                    date={element.pubDate}
                    source={element.source_id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
