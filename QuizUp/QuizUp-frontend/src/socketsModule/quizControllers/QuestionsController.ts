import Question from "../quizEntities/Question";
import QuestionSender from "../senders/QuestionSender";



export default class QuestionsController {

    private questionSender:QuestionSender;
    private questions:Question[];
    currentQuestionIndex:number;
    private pin:string;

    constructor(pin:string ,questionSender:QuestionSender, questions:Question[]) {
        this.questionSender = questionSender;
        this.questions = questions;
        this.currentQuestionIndex=0;
        this.pin = pin;
    }

    public getCurrentQuestion():Question {
        return this.questions[this.currentQuestionIndex];
    }
    public nextQuestion() {

        this.currentQuestionIndex=this.currentQuestionIndex+1;
        this.questionSender.sendQuestion(this.pin,this.questions[this.currentQuestionIndex].getSendingVersion());
    }
    public sendCurrentQuestion() {
        this.questionSender.sendQuestion(this.pin,this.questions[this.currentQuestionIndex].getSendingVersion());
    }

    public getPin() {
        return this.pin;
    }
    public getCount() {
        return this.questions.length;
    }
}