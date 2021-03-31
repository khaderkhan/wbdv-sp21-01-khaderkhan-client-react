import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    return(
        <div>
            {
                editing &&
                    <>
                    <div>
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))} value={widget.type} className="form-control">
                                                <option value={"HEADING"}>Heading</option>
                                                <option value={"PARAGRAPH"}>Paragraph</option>
                                                <option value={"LIST"}>List</option>
                                                <option value={"IMAGE"}>Image</option>

                    </select>
                        <input 
                        defaultChecked={widget.ordered}
                        onChange={(e) => setWidget(widget => ({...widget, ordered: e.target.checked}))}
                        type="checkbox"/> Ordered
                        <br/>
                        Item list
                        <textarea 
                        defaultValue={widget.text} rows={10} 
                        onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))}
                        className="form-control"></textarea>
                        {JSON.stringify(widget)}
                    </div>
                    </>
            }
            {
                
                !editing &&
                    <>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget