import Choice from "../quizEntities/Choice";
import AnswerSender from "../senders/AnswerSender";


export default class AnsweringController {
    private answerSender:AnswerSender;

    constructor( answerSender:AnswerSender) {
        this.answerSender = answerSender;
    }

    public answer(choice:Choice,pin:string, playerId:string) {
        if (choice)
        this.answerSender.sendAnswer(pin,playerId,choice.getText());
    }


}