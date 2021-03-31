import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            <h2>Image Widget</h2>
            {
                editing &&
                <div>
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))} value={widget.type} className="form-control">
                                                <option value={"HEADING"}>Heading</option>
                                                <option value={"PARAGRAPH"}>Paragraph</option>
                                                <option value={"LIST"}>List</option>
                                                <option value={"IMAGE"}>Image</option>

                    </select>

                    <div>
                        URL
                        <input value={widget.url} className="form-control" placeholder="Image URL"/>
                        width
                        <input value={widget.width} className="form-control"/>
                        height
                        <input value={widget.height} className="form-control"/>
                    </div>
                </div>
            }
             {
                            !editing &&
                            <>
                                <img src={widget.src} width={widget.width} height={widget.height}></img>
                            </>
                        }
        </div>
    )
}

export default ImageWidget