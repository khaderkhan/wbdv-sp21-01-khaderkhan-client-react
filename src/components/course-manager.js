import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        const newCourse = {
            owner: "me",
            lastModified: "2/10/2021"
        }
        const newCourseTitle = document.getElementById('course-title-id').value
        newCourse["title"] = newCourseTitle
        if(newCourseTitle){
            courseService.createCourse(newCourse)
                .then(actualCourse => {
                    this.state.courses.push(actualCourse)
                    this.setState(this.state)
                })
            document.getElementById('course-title-id').value = ""
        }


    }

    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>*/}
                {/*    Add Course*/}
                {/*</button>*/}

                <div className="wbdv-sticky-top wbdv-padding-5px">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2">
                            <h4 className="nav-text">Course Manager</h4>
                        </div>
                        <div className="col-8">
                            <input className="form-control" placeholder="New Course Title"
                                   className="placeholder-navbar col-8"
                                   id="course-title-id"
                            />
                        </div>
                        <div className="col-1">
                            <i onClick={() => this.addCourse()} className="fa fa-plus-circle fa-2x font-awesome-icon"></i>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                    />
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
                <div className="fixed-bottom">
                    <a className="float-right" href="#">
                        <i onClick={() => this.addCourse()} className="fa fa-plus-circle fa-2x font-awesome-icon-bottom"></i>
                    </a>
                </div>
            </div>
        )
    }
}
// export default CourseManager