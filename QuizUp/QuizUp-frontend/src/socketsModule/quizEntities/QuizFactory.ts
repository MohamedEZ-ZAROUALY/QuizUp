import Question from "./Question";
import Quiz from "./Quiz";



export default class QuizFactory {

    public createQuiz(quizObject):Quiz {
        let quiz = new Quiz(quizObject.name, quizObject.description,[]);
        quizObject.questions.forEach(quiestionJson => {
            let question = new Question(quiestionJson.question,[]);
            question.setChoices(quiestionJson.choices);
            quiz.addQuestion(question);
        });
        return quiz;

    }
}