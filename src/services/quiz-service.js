export const findAllQuizzes = (quizId) =>
    fetch("http://localhost:3000/api/quizzes")
                .then(response => response.json())

export const fetchQuizScore = (quizId) => 
    fetch(`http://localhost:3000/api/quizzes/${quizId}/attempts`)
                .then(response => response.json())


export const submitQuiz = (quizId, questions) => 
    fetch(`http://localhost:3000/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
        'content-type': 'application/json'
        }
    }).then(response => response.json())

    
    
export default {findAllQuizzes, submitQuiz, fetchQuizScore} 