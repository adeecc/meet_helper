import React, { Component } from 'react'
import CreateForm from "./CreateForm";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <CreateForm></CreateForm>
                </div>
            </React.Fragment>
        )
    }
}
