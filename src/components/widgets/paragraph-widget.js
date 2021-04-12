import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing, updateWidget, deleteWidget}) => 
        <div>
            {
                editing &&
                <>
                <select onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))} value={widget.type} className="form-control">
                                                <option value={"HEADING"}>Heading</option>
                                                <option value={"PARAGRAPH"}>Paragraph</option>
                                                <option value={"LIST"}>List</option>
                                                <option value={"IMAGE"}>Image</option>

                </select>

                <textarea
                    onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))}
                    value={widget.text}
                    className="form-control"></textarea>
                </>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>


export default ParagraphWidget
