//import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Posts from "./posts";
import Post from "./post";
import Products from "./products";
import Product from "./product";
import NotFound from "./not-found";
//import LoadingIcon from "./dist/images/loading-icon.gif";
//import Placeholder from "./placeholder.jpg";

// Load the Sass file
require("./dist/style.css");

const CelestialSettings = window.CelestialSettings;

const App = () => (
    <div id="page-inner">
        <Header />
        <div id="content">
            <Switch>
                <Route exact path={CelestialSettings.path} component={Posts} />
                <Route exact path={CelestialSettings.path + "posts/:slug"} component={Post} />
                <Route exact path={CelestialSettings.path + "products"} component={Products} />
                <Route exact path={CelestialSettings.path + "products/:product"} component={Product} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </div>
);

// Routes
const routes = (
    <Router>
        <Route path="/" component={App} />
    </Router>
);

render(routes, document.getElementById("page"));
