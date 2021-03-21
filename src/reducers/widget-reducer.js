const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            const newState = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return newState
        case "DELETE_WIDGET":
            console.log("del widget reducer===>>", action)
            const newState1 = {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.widgetToDelete) { 
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(m => {
                    if(m._id === action.updateWidget._id) {
                        return action.updateWidget
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default widgetReducer