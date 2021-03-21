import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
// import topicService from '../../services/topic-service'
import widgetService from "../../services/widget-service"
import topicReducer from '../../reducers/topic-reducer';

const WidgetList = ({
    widgets = [],
    findWidgetsForTopic,
    createWidgetForTopic,
    updateWidget,
    deleteWidget

}) => {
    const {topicId, moduleId, lessonId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        // TODO: move server communication to widget-service.js
        // fetch("http://localhost:8080/api/widgets")
        // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        //     .then(response => response.json())
        //     .then(widgets => setWidgets(widgets))
        console.log("LOAD WIDGETS FOR TOPIC: " + topicId)
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }


    }, [topicId, moduleId, lessonId])
    // const createWidgetForTopic = () => {
    //     // TODO: move server communication to widget-service.js
    //     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
    //         method: "POST",
    //         body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(actualWidget => {
    //             setWidgets(widgets => ([...widgets, actualWidget]))
    //         })
    // }
    // const deleteWidget = (wid) =>
    //     fetch(`http://localhost:8080/api/widgets/${wid}`, {
    //         method: "DELETE",
    //     }).then(response => {
    //         setWidgets((widgets) => widgets.filter(w => w.id !== wid))
    //     })
    // const updateWidget = (wid, widget) =>
    //     fetch(`http://localhost:8080/api/widgets/${wid}`, {
    //         method: "PUT",
    //         body: JSON.stringify(widget),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }).then(response => {
    //         setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
    //         setEditingWidget({})
    //     }
    //  )
        
    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List </h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                updateWidget={widget.id, editingWidget} 
                                deleteWidget={widget} 
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                updateWidget={widget.id, editingWidget} 
                                deleteWidget={widget} 
                                widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {/* {JSON.stringify(widgets)} */}
        </div>
    )
}


const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})


const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        console.log("LOAD WIDGETS FOR TOPIC:")
        console.log(topicId)
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },
    createWidgetForTopic: (topicId) => {
        console.log("CREATE WIDGET FOR TOPIC: " + topicId)
        widgetService
            .createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    updateWidget: (wid, widget, widget2) => {
        console.log("updateWidget====>>>", widget)
        console.log("hello", widget2)
        widgetService.updateWidget(wid, widget)
            .then(widget => dispatch({type: "UPDATE_WIDGET", updateWidget: widget}))
    },
    deleteWidget: (widgetToDelete) => {
        console.log("widgetToDelete====>>>", widgetToDelete)
        widgetService.deleteWidget(widgetToDelete)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },

})

export default connect(stpm, dtpm)(WidgetList)


//export default WidgetList;