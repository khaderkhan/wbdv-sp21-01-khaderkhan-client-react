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

    const [widget, setWidget] = useState({})
    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId, moduleId, lessonId])
   
        
    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List </h2>
           
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                    <>
                                        <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
                                        <i onClick={() => {
                                            updateWidget(_widget.id, widget)
                                        }} className="fas fa-check float-right"></i>
                                    </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    updateWidget={_widget.id, widget} 
                                    deleteWidget={_widget} 
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    updateWidget={widget.id, widget} 
                                    deleteWidget={widget} 
                                    widget={_widget}/>
                                    
                            }
                        </li>
                    )
                }
            </ul>


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
    updateWidget: (wid, widget, temp) => {
        // Object.keys(widget).map((key, index) => {
        //     // console.log(key)
        //     console.log(key === "type")
        // })
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