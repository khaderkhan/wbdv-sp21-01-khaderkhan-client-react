import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {

    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }


    return (
    <div className="card" style={{width: "18rem", margin: "15px"}}>
        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
             alt="..."/>
        <div className="card-body">
            {
                !editing &&
                <h5 className="card-title">{course.title}</h5>
            }

            <p className="card-text">
                <div>
                    Some Course Description here
                </div>

            </p>
            <div>
                {
                    !editing &&
                    <Link to={`/courses/grid/edit/${course._id}/${course.title}`} className="btn btn-primary"> 
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit fa-pull-right"></i>
                }
                <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-pull-right"></i>
            </div>
        </div>
    </div>
    )
}

export default CourseCard