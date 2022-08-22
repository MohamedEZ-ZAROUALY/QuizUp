import QuizFactory from "../quizEntities/QuizFactory"


const generateQuiz = (quizJson) => {
    const quizFactory = new QuizFactory();
    return quizFactory.createQuiz(quizJson);
}

export default generateQuiz;