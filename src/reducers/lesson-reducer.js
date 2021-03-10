const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }

        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        console.log("deleting lesson here", lesson._id)
                        return false
                    } else {
                        return true
                    }
                })
            }
            
        case "UPDATE_LESSON":
            const actionLesson = (action)
            console.log("update the lesson ", actionLesson, typeof actionLesson, state.lessons)
            return {
                lessons: state.lessons.map(l => {
                    if(l._id === actionLesson.updateLesson._id) {
                        console.log("here===>>", actionLesson.updateLesson)
                        return actionLesson.updateLesson
                    } else {
                        return l
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer