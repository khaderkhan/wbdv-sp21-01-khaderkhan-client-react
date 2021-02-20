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
            <div class="container">
                <table className="table table-striped">
                    <thead>
                    {/*<CourseHeader view="grid"/>*/}
                    <tr>
                        <th className="w-25 col-md-12">Title</th>
                        <th className="w-25 col-md-4">Owned By</th>
                        <th className="w-25 col-md-4">Last Modified</th>
                        <th className="w-25 col-md-4">
                            <div>
                                <i className="mr-2 fas fa-folder"></i>
                                <i className="fas fa-sort-alpha-up-alt"></i>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th float-right fa-2x"></i>
                                </Link>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS3200" owner="you"/>*/}
                    {/*<CourseRow title="CS5200" owner="him"/>*/}
                    {/*<CourseRow title="CS4550" owner="she"/>*/}
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