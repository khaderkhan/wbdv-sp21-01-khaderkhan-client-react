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
            <div>
                <table className="table">
                    <thead>
                    {/*<CourseHeader view="grid"/>*/}
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Owned By</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col">
                            <div>
                                <i className="fas fa-folder"></i>
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