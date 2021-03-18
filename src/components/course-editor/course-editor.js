import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from '../../reducers/topic-reducer';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list"


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId, layout, courseName} = useParams();
    return (
    <Provider store={store}>
        <div>
            <h2>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"></i>
                </Link>

                {courseName} Editor 
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <LessonTabs/>
                    </div>
                    <div className="row">
                        <TopicPills/>
                    </div>
                    <div className="row">
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)}

export default CourseEditor