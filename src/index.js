import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import registerServiceWorker from "./registerServiceWorker";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/routes/Home";
import BeerDetails from "./components/routes/BeerDetails";
import BeerSearch from "./components/routes/BeerSearch";
import BeerFinder from "./components/routes/BeerFinder";
import BeerCollection from "./components/routes/BeerCollection";
import "./index.css";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={BeerDetails} />
        <Route path="/search/:query" component={BeerSearch} />
        <Route path="/beer_finder/:query" component={BeerFinder} />
        <Route path="/my_beers" component={BeerCollection} />
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
