const WIDGET_URL = "http://localhost:8080/api"


export const createWidget = (lessonId, widget) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: 'DELETE'
    })
        .then(response => response.json());


export default {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}