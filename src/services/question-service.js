export const findAllQuestions = (quizId) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
                        .then(response => response.json())

export default {findAllQuestions}