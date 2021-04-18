import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service";
import quizService from "../../services/quiz-service";
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Scores',
      dataIndex: 'score',
      key: 'score',
    }
]

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        questionService.findAllQuestions(quizId)
             .then(questions => setQuestions(questions))
        
        quizService.fetchQuizScore(quizId)
            .then(attempts => {
                console.log("attempts===>>", attempts);
                setAttempts(attempts);
                 return
            })

    },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li>
                        <Question question={question}/>
                    </li>
                    )
                }
            </ul>
            <div class="col-sm-3">
            <button class='btn btn-success btn-block' onClick={() => quizService.submitQuiz(quizId, questions).then(result => {setAttempts([...attempts, result.score])})} style={{backgroundColor: "green", borderRadius: "5px"}}>
                Submit
            </button>
            </div>
            <h3>Previous Scores For the Quiz</h3>
                     {
                     attempts.length > 0 &&    
                        <Table columns={columns} dataSource={attempts} pagination={false} />   
                    }
        </div>
    );
}

export default Quiz;