import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-around" ref="navbar">
                    <div className="container">
                        <div>
                            <Link className="navbar-brand" to="/">Meet Help</Link>
                        </div>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav social-links ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create">Create Classroom</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </React.Fragment >
        );
    }
}

export default withRouter(Navbar);
