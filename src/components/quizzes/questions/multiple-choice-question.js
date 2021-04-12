import React, {useState}  from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    console.log("question here====>>>", question)
    return(
        <>
            <h4>{question.question}
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
                    question.choices.map((choice) => {
                        return(
                        <>
                            <li className="list-group-item">
                                <label>
                                    <input type="radio"
                                    onClick={() => setAnswer(choice)}
                                    name={question._id}/>
                                    {choice}
                                    <br/>
                                </label>
                            </li>
                        </>
                        )
                    })
                }

                {isCorrectAnswer != null && isCorrectAnswer &&
                question.choices.map((choice) => {
                    if (choice === question.correct) {
                         return <>
                                   <li className="list-group-item list-group-item-success">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           checked = {choice == answer? true: false}
                                           name={question._id}/>
                                           {choice}
                                           <i className="fas fa-check" style={{color:"green"}}></i>
                                           <br/>
                                       </label>
                                   </li>
                               </>

                    } else {
                         return <>
                                   <li className="list-group-item">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           checked = {choice == answer ? true: false}
                                           name={question._id}/>
                                           {choice}
                                           <br/>
                                       </label>
                                   </li>
                               </> 
                    }
                })}

                {isCorrectAnswer != null && !isCorrectAnswer &&

                question.choices.map((choice) => {

                          return <>
                                   <li className= {choice == choice === question.correct? "list-group-item list-group-item-success": "list-group-item list-group-item-danger" }>
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           checked = {choice == answer? true: false}
                                           name={question._id}/>
                                           {choice}
                                           <i className="fas fa-times" style={{color:"red"}}></i>
                                           <br/>
                                       </label>
                                   </li>
                               </>
                    
                })}

                </ul>
           </div>
           <br/>
            <button onClick={() => setIsCorrectAnswer(answer == question.correct)} style={{backgroundColor: "green", borderRadius: "5px"}}>
              Grade
            </button>
            <br/>
            <br/>
        </>
    )
}

export default MultipleChoiceQuestion;