import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import CourseHeader from "../course-table/course-table-header";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
        <div className="row">
            <div className="col-4 ">
                <h5>
                    Recent documents
                </h5>
            </div>
            <div className="col-4 text-center">
                <h5>
                    Owned By me
                    <i className="fas fa-caret-down"></i>
                </h5>

            </div>
            <div className="col-4 text-right">
                <div>
                    <i className="mr-2 fas fa-folder"></i>
                    <i className="fas fa-sort-alpha-up-alt"></i>
                    {/*<Link to="/courses/grid">*/}
                    {/*    <i className="fas fa-th float-right fa-2x"></i>*/}
                    {/*</Link>*/}
                </div>
            </div>

        </div>
        {/*<h2>Course Grid {courses.length}</h2>*/}
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