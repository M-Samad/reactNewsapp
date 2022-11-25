import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 20;
  const apiKey = "pub_1373209636411ebe3b2d7828ea6b7d06d876b";
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState("");
  // pageSize = 5;
  // apiKey = process.env.REACT_APP_NEWS_API;
  // state = {
  //   progress: 0,
  // };

  return (
    <div>
      <Router>
        <Navbar search={search} setSearch={setSearch} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          {search && (
            <Route exact path={`/${search}`}>
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="search"
                pageSize={pageSize}
                country="in"
                category="search"
                query={search}
                setSearch={setSearch}
              />
            </Route>
          )}
          <Route exact path="/reactNewsapp">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="top"
              pageSize={pageSize}
              country="in"
              category="world"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              setSearch={setSearch}
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              setSearch={setSearch}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
