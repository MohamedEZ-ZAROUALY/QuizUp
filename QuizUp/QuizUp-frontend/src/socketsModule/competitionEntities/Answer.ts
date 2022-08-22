import Question from "../quizEntities/Question";
import ScoreSender from "../senders/ScoreSender";

export default class Answer {
    private question:Question;
    private answerText:string;
    private answerDate:number;
    constructor(question:Question, answerText:string, answerDate:number) {
        this.question = question;
        this.answerText=answerText;
        this.answerDate = answerDate;
    }
    public getScore():number {
        return this.question.getAnswerScore(this.answerText);
    }
    public getQuestion = () => {
        return this.question;

    }
}