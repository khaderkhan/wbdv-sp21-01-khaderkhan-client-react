import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        updateLesson,
        deleteLesson,
    }) => {
    const {courseId, courseName, moduleId, lessonId, layout} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
    <div>
        {/* <h2>Lessons</h2> */}
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        {/* <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson} 
                            item={lesson}/> */}
                            {/* /courses/${layout}/edit/${courseId}/modules/${module._id} */}
                            {/* /courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId */}
                          <EditableItem
                            className="padding-5px"
                            active={lesson._id === lessonId}
                            to={`/courses/${layout}/edit/${courseId}/${courseName}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson} 
                            item={lesson}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)} className="icon icon-pad fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },

})

export default connect(stpm, dtpm)(LessonTabs)