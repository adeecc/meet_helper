import React, { Component } from 'react'
import CreateForm from './CreateForm'

export default class CreatePage extends Component {
    render() {
        return (
            <div className="container mt-5 mb-3">
                <h1 className="display-4">Create a new Classroom or Update previous one</h1>
                <hr className="mt-4"/>
                <CreateForm></CreateForm>
            </div>
        )
    }
}
