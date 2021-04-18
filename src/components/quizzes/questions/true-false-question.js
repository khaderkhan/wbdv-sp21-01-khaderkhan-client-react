import React, {useState} from "react";

const listHelper = ["True", "False"]

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    return (
                <>
                    <h4>
                        {question.question}
                        {
                            isCorrectAnswer!= null && isCorrectAnswer &&
                            <i className="fas fa-check" style={{color:"green"}}></i>
                        }
                        {
                             isCorrectAnswer!= null && !isCorrectAnswer &&
                            <i className="fas fa-times" style={{color:"red"}}></i>
                        }
                    </h4>
                    <div class="col-3">
                        <ul className="list-group">
                            {isCorrectAnswer == null &&
                            <>

                                {listHelper.map(item => {
                                    return <li className="list-group-item">
                                    <label>
                                        <input
                                              type="radio"
                                              onClick={() => {setAnswer(true); question.answer='false'}}
                                              name={question._id}/>{item}</label>
                                </li>
                                })}
                            </>
                            }

                            {isCorrectAnswer != null && isCorrectAnswer && answer &&
                            <>
                               
                                {
                                    listHelper.map( item => {
                                        <li className="list-group-item">
                                    <label>
                                        <input
                                          type="radio"
                                          onClick={() => {setAnswer(true); question.answer='false'}}
                                          name={question._id}/>{item}
                                    </label>
                                </li> 
                                    })
                                }
                            </>
                            }

                            {isCorrectAnswer != null && isCorrectAnswer && !answer &&
                            <>
                                 {
                                     
                                     listHelper.map( item => {

                                        <li className= {item === "True"? "list-group-item" : "list-group-item list-group-item-success"}>
                    
                                        <label>
                                            <input
                                                type="radio"
                                                checked = {item === "False"? true: false }
                                                onClick={
                                                    () => {
                                                        if(item === "False"){
                                                            setAnswer(false)
                                                        }
                                                        else{
                                                            setAnswer(true)
                                                        }
                                                    } 
                                                }
                                                name={question._id}/> {item}
                                                {item === "False"?  <i className="fas fa-check" style={{color:"green"}}></i>: <></>}
                                                
                                        </label>
                                     </li>
                                     })
                                 }
                             </>
                            }

                            {isCorrectAnswer != null && !isCorrectAnswer && !answer &&
                             <>
                                 <li className="list-group-item list-group-item-success">
                                     <label>
                                        <input
                                             type="radio"
                                             onClick={() => {setAnswer(true); question.answer='true'}}
                                             name={question._id}/>True
                                             <i className="fas fa-check" style={{color:"green"}}></i>
                                     </label>
                                 </li>
                                 <li className="list-group-item list-group-item-danger">
                                    <label>
                                        <input
                                               type="radio"
                                               checked
                                               onClick={() => {setAnswer(true); question.answer='false'}}
                                               name={question._id}/>False
                                               <i className="fas fa-times" style={{color:"red"}}></i>
                                    </label>
                                 </li>
                             </>
                             }

                             {isCorrectAnswer != null && !isCorrectAnswer && answer &&
                             <>
                                 <li className="list-group-item list-group-item-danger">
                                    <label>
                                        <input
                                             type="radio"
                                             checked
                                             onClick={() => {setAnswer(true); question.answer='true'}}
                                             name={question._id}/>True
                                             <i className="fas fa-times" style={{color:"red"}}></i>
                                    </label>
                                 </li>
                                 <li className="list-group-item list-group-item-success">
                                    <label>
                                        <input
                                             type="radio"
                                             onClick={() => {setAnswer(true); question.answer='false'}}
                                             name={question._id}/>False
                                             <i className="fas fa-check" style={{color:"green"}}></i>
                                    </label>
                                 </li>
                             </>
                             }

                        </ul>
                    </div>
                    <br/>
            </>


    )
}

export default TrueFalseQuestion;

