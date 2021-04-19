const URL = "https://mubaris-node-cs5610.herokuapp.com"

export const findAllQuizzes = (quizId) =>
    fetch("https://mubaris-node-cs5610.herokuapp.com/api/quizzes")
                .then(response => response.json())

export const fetchQuizScore = (quizId) => 
    fetch(`https://mubaris-node-cs5610.herokuapp.com/api/quizzes/${quizId}/attempts`)
                .then(response => response.json())


export const submitQuiz = (quizId, questions) => 
    fetch(`https://mubaris-node-cs5610.herokuapp.com/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
        'content-type': 'application/json'
        }
    }).then(response => response.json())

    
    
export default {findAllQuizzes, submitQuiz, fetchQuizScore} 