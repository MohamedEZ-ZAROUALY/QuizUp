import Question from "../quizEntities/Question";


export type QuestionObserver = (question:Question) => void;
export default class QuestionManager {

    private question?:Question;
    private questionObserver:QuestionObserver;

    constructor(questionObserver:QuestionObserver) {
        this.questionObserver = questionObserver;
    }

    public setQuestion(questionJson) {
        this.question = new Question(questionJson.question,[]);
        this.question.setChoicesJson(questionJson.choices);
        this.questionObserver(this.question);
    }

    public getQuestion():Question|undefined { 
        return this.question;
    }

}