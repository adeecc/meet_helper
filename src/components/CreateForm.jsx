import React, { Component } from 'react'
import { withRouter } from "react-router";

import { axiosPOST } from '../utils/axiosClient'

class CreateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
            name: "",
            section: "",
            professor: "",
            hour: "",
            meet_link: "",
            drive_link: "",
            days: [],
        }
    }


    onTextInputChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({[nam]: val});
    }

    onCheckboxChangeHandler = (event) => {
        const val = event.target.value;
        const prevDays = this.state.days;
        const index = prevDays.indexOf(val);
        if (index < 0)  {
            this.setState({days: [...prevDays, val]});
        } else {
            prevDays.splice(index, 1);
            this.setState({days: prevDays});
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        axiosPOST('/api/classrooms/create/', this.state)
        .then(res => {
            console.log(res);
            this.props.history.push('/')
        });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="code" id="inputCode" placeholder="Code" />
                        </div>
                        <div className="form-group col-md-6">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="name" id="inputName" placeholder="Course Name" />
                        </div>
                        <div className="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="section" id="inputSection" placeholder="Section" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="professor" id="inputProfessor" placeholder="Professor" />
                        </div>
                        <div className="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="hour" id="inputHour" placeholder="Hour (1-9)" />
                        </div>
                        <div className="form-group  col-md-6">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="meet_link" id="inputMeetLink" placeholder="Google Meet Link" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group  col">
                            <input onChange={this.onTextInputChangeHandler} type="text" className="form-control" name="drive_link" id="inputDriveLink" placeholder="Drive Link (if any)" />
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" className="form-check-input" name="days" id="DayM" value="M" />
                            <label className="form-check-label" htmlFor="DayM">Monday</label>
                        </div>


                        <div className="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" className="form-check-input" name="days" id="Dayt" value="T" />
                            <label className="form-check-label" htmlFor="DayT">Tuesday</label>
                        </div>


                        <div className="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" className="form-check-input" name="days" id="DayW" value="W" />
                            <label className="form-check-label" htmlFor="DayW">Wednesday</label>
                        </div>


                        <div className="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" className="form-check-input" name="days" id="DayTh" value="Th" />
                            <label className="form-check-label" htmlFor="DayTh">Thursday</label>
                        </div>


                        <div className="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" className="form-check-input" name="days" id="DayF" value="F" />
                            <label className="form-check-label" htmlFor="DayF">Friday</label>
                        </div>


                        <div className="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" className="form-check-input" name="days" id="DayS" value="S" />
                            <label className="form-check-label" htmlFor="DayS">Saturday</label>
                        </div>
                    </div>


                    <div className="form-row mt-3">
                        <button type="submit" className="btn btn-primary  mx-auto col-sm-3">Save</button>
                    </div>

                </form>
            </React.Fragment >
        )
    }
}

export default withRouter(CreateForm);