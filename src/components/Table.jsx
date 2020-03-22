import React, { Component } from 'react';
import { axiosGET } from '../utils/axiosClient'
// import './Home.scss'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    componentDidMount() {
        axiosGET('/api/classrooms/').then(res => {
            console.log(res.data)
            this.setState({ data: res.data });
        })
    }

    render() {
        let getRows = () => {
            return this.state.data.map(el => (
                <tr key={el._id}>
                    <td>{el.dept} {el.code}</td>
                    <td>
                        <a href={el.meet_link}>
                            {el.name}
                        </a>
                    </td>
                    <td>{el.section}</td>
                    <td>{el.professor}</td>
                    <td>
                        {el.day.map(item => item)}
                    </td>
                    <td>{el.hour}</td>
                    <td>{el.drive_link}</td>
                </tr>
            ));
        };

        return (
            <React.Fragment>
                <div className="container">

                    {/* <div class="form-row">
                        <div class="form-group col-md-2">
                            <input type="text" class="form-control" id="inputCourseDept" placeholder="Dept." />
                        </div>
                        <div class="form-group col-md-2">
                            <input type="text" class="form-control" id="inputCourseCode" placeholder="Code" />
                        </div>
                        <div class="form-group col-md">
                            <input type="text" class="form-control" id="inputProfessorName" placeholder="Professor" />
                        </div>
                        <div class="form-group col-md-2">
                            <input type="text" class="form-control" id="inputSection" placeholder="Sec." />
                        </div>
                        <div class="form-group col-md-1">
                            <button type="submit" class="btn btn-primary ">Search</button>
                        </div>
                    </div> */}



                    <table className="table py-5">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Section</th>
                                <th>Professor</th>
                                <th>Days</th>
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
