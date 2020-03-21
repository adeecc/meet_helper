import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Table from "./components/Table";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Table" component={Table} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default App;
