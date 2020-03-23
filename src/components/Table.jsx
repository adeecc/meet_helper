import React, { Component } from 'react';
import { axiosGET } from '../utils/axiosClient'
// import './Home.scss'

export default class Home extends Component {


    render() {
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
                        {el.day.map(item => item)}
                    </td>
                    <td>{el.hour}</td>
                    <td>{el.drive_link}</td>
                </tr>
            ));
        };

        return (
            <React.Fragment>
                <table className="table table-responsive-md my-5">
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
            </React.Fragment>
        )
    }
}
