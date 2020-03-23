import React, { Component } from 'react'
import { axiosPOST } from '../utils/axiosClient'

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
            section: "",
            professor: "",
        }
    }


    onTextInputChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({ [nam]: val });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        axiosPOST('/api/classrooms/search/', this.state)
            .then(res => {
                console.log(res);
            });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" id="inputCode" placeholder="Code" />
                        </div>
                        <div className="form-group col-md">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" id="inputProfessor" placeholder="Professor" />
                        </div>
                        <div className="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" id="inputSection" placeholder="Sec." />
                        </div>
                        <div className="form-group col-md-1">
                            <button type="submit" className="btn btn-primary ">Search</button>
                        </div>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}
