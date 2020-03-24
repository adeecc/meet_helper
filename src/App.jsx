import React from "react";
import { Switch, Route } from "react-router-dom";

import "./assets/css/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CreatePage from "./components/CreatePage"

const App = () => {
    return (
        <React.Fragment>
            <Navbar />

            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={CreatePage} />
                </Switch>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
