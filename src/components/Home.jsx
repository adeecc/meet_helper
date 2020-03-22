import React, { Component } from 'react'
import Table from "./Table";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="my-5">
                        <Table></Table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
