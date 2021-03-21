const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            const messesUpState = {
                ...state,
                topics: action.topics
            }
            console.log("messesUpState===>>>", messesUpState)
            return messesUpState
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState
        case "DELETE_TOPIC":
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) { 
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(m => {
                    if(m._id === action.updateTopic._id) {
                        return action.updateTopic
                    } else {
                        return m
                    }
                })
            }
        case "REFRESH":
            console.log("refreshhh reducerrrr====>>>>>",action)
                const newState2 = {
                    topics: []
                }
                return newState2
        default:
            return state

       
    }
}
export default topicReducer