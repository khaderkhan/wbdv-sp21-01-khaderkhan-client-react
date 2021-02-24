import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import CourseHeader from "./course-table-header";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {/*<div className="row">*/}
                        <th className="w-25 col-sm-6 col-xs-6">Title</th>
                        <th className="w-25 d-none d-md-table-cell">Owned By</th>
                        <th className="w-25 d-none d-lg-table-cell">Last Modified</th>
                        <th className="w-25 col-sm-6 col-xs-6">
                            <div>
                                <i className="mr-2 fas fa-folder"></i>
                                <i className="fas fa-sort-alpha-up-alt"></i>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th float-right fa-2x"></i>
                                </Link>
                            </div>
                        </th>
                        {/*</div>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}