import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) => {
    return (
        <div>
            <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
            </Link>
            <span onClick={() => history.goBack()}> Go back </span>
            <div className="container">

                <nav className="navbar navbar-dark bg-dark">
                    <div className="col-4">
                        <a className="navbar-brand" href="#">CS5610-WebDev</a>
                    </div>

                    <div className="col-8">

                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Build</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item-top">
                                <a className="nav-link nav-item-top" href="#">Theme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Settings</a>
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-plus"></i>
                            </li>

                        </ul>

                    </div>


                </nav>

                <div className="row">

                </div>

                <div className="row">
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item active">
                                Module 1 - jQuery
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                Module 2 - React
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                Module 3 - Redux
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                Module 4 - Native
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                Module 5 - Angular
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                Module 6 - Node
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                Module 7 - Mongo
                                <i className="pull-right fa fa-times"></i>
                            </li>
                            <li className="list-group-item list-colors">
                                <i className="pull-right fa fa-plus"></i>
                            </li>


                        </ul>

                    </div>
                    <div className="col-8">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topic 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topic 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Topic 4</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        {/*// </h1>*/}
        </div>
    )
}
export default CourseEditor