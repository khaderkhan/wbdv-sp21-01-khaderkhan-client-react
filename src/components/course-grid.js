import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import CourseHeader from "./course-table-header";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
        <h2>Course Grid {courses.length}</h2>
        {/*<CourseHeader />*/}
        <div className="row">
            {
                courses.map(course =>
                    (
                        <CourseCard
                            course={course}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                        />
                    )
                )
            }
        </div>

    </div>

export default CourseGrid