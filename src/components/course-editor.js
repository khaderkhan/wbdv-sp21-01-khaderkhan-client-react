import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) => {
    return (
        <h1>
            <Link to="/courses">
            <i className="fas fa-arrow-left"></i>
            </Link>
            <span onClick={() => history.goBack()}> Go back </span>
            Course Editor!
        </h1>
    )
}
export default CourseEditor