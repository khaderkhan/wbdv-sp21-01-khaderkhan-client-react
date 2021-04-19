export const findAllQuestions = (quizId) =>
    fetch(`https://mubaris-node-cs5610.herokuapp.com/api/quizzes/${quizId}/questions`)
                        .then(response => response.json())

export default {findAllQuestions}