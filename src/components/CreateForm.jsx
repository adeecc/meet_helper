import React, { Component } from 'react'
import { axiosPOST } from '../utils/axiosClient'

export default class CreateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseDept: "",
            courseCode: "",
            courseName: "",
            section: "",
            professorName: "",
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
        console.log({[nam]: val});
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

        console.log(this.state.days);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);

        axiosPOST('/api/classrooms/create/', this.state)
        .then(res => console.log(res.data));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitHandler}>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="courseDept" id="inputCourseDept" placeholder="Department" />
                        </div>
                        <div class="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="courseCode" id="inputCourseCode" placeholder="Code" />
                        </div>
                        <div class="form-group col-md-6">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="courseName" id="inputCourseName" placeholder="Course Name" />
                        </div>
                        <div class="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="section" id="inputSection" placeholder="Section" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="professorName" id="inputProfessorName" placeholder="Professor" />
                        </div>
                        <div class="form-group col-md-2">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="hour" id="inputCourseCode" placeholder="Hour (1-9)" />
                        </div>
                        <div class="form-group  col-md-6">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="meet_link" id="inputProfessorName" placeholder="Google Meet Link" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group  col">
                            <input onChange={this.onTextInputChangeHandler} type="text" class="form-control" name="drive_link" id="inputProfessorName" placeholder="Drive Link (if any)" />
                        </div>
                    </div>

                    <div class="form-inline">
                        <div class="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" class="form-check-input" name="days" id="DayM" value="M" />
                            <label class="form-check-label" for="DayM">Monday</label>
                        </div>


                        <div class="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" class="form-check-input" name="days" id="Dayt" value="T" />
                            <label class="form-check-label" for="DayT">Tuesday</label>
                        </div>


                        <div class="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" class="form-check-input" name="days" id="DayW" value="W" />
                            <label class="form-check-label" for="DayW">Wednesday</label>
                        </div>


                        <div class="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" class="form-check-input" name="days" id="DayTh" value="Th" />
                            <label class="form-check-label" for="DayTh">Thursday</label>
                        </div>


                        <div class="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" class="form-check-input" name="days" id="DayF" value="F" />
                            <label class="form-check-label" for="DayF">Friday</label>
                        </div>


                        <div class="form-check custom-checkbox form-check-inline col">
                            <input onChange={this.onCheckboxChangeHandler} type="checkbox" class="form-check-input" name="days" id="DayS" value="S" />
                            <label class="form-check-label" for="DayS">Saturday</label>
                        </div>
                    </div>


                    <div class="form-row mt-3">
                        <button type="submit" class="btn btn-primary  mx-auto col-sm-3">Save</button>
                    </div>

                </form>
            </React.Fragment >
        )
    }
}
