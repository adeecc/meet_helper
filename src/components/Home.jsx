import React, { Component } from 'react'
import { axiosGET, axiosPOST } from '../utils/axiosClient'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            code: "",
            section: "",
            professor: "",
        }
    }

    componentDidMount() {
        axiosGET('/api/classrooms/').then(res => {
            this.setState({ data: res.data });
        })
    }

    componentWillUnmount() {

    }

    onChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({ [nam]: val });


    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        let data = {
            code: this.state.code,
            section: this.state.section,
            professor: this.state.professor
        }

        axiosPOST('/api/classrooms/search/', data)
            .then(res => {

                this.setState({ data: res.data });
            });
    }

    render() {
        let driveLinkConditional = (el) => {
            if (el.drive_link) {
                return (
                    <a href={el.drive_link}>
                        Click Here.
                    </a>
                )
            }

            else {
                return (<div>-</div>)
            }
        }

        let getRows = () => {
            return this.state.data.map(el => (
                <tr key={el._id}>
                    <td>{el.code}</td>
                    <td>
                        <a href={el.meet_link}>
                            {el.name}
                        </a>
                    </td>
                    <td>{el.section}</td>
                    <td>{el.professor}</td>
                    <td>
                        {el.day.map( item => item )}
                    </td>
                    <td>{el.hour}</td>
                    <td>
                        {driveLinkConditional(el)}
                    </td>
                </tr>
            ));
        };

        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="display-4 mt-5">Karuna Tiem</h1>

                    <div className="mt-5">
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <input onChange={this.onChangeHandler} type="text" className="form-control" name="code" id="inputCode" placeholder="Code" />
                                </div>
                                <div className="form-group col-md-2">
                                    <input onChange={this.onChangeHandler} type="text" className="form-control" name="section" id="inputSection" placeholder="Sec." />
                                </div>
                                <div className="form-group col-md">
                                    <input onChange={this.onChangeHandler} type="text" className="form-control" name="professor" id="inputProfessor" placeholder="Professor" />
                                </div>
                                <div className="form-group col-md-1">
                                    <button type="submit" className="btn btn-primary ">Search</button>
                                </div>
                            </div>
                        </form>

                    </div>

                    <table className="table table-responsive-md my-5">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Section</th>
                                <th>Professor</th>
                                <th>day</th>
                                <th>Hour</th>
                                <th>Drive Links</th>
                            </tr>
                        </thead>
                        <tbody ref="table_body">
                            {getRows()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;