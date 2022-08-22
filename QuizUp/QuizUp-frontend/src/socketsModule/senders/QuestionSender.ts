import Question from "../quizEntities/Question";
import WebSocketSender from "../websocket/WebSocketSender";



export default class QuestionSender {


    private webSocketSender:WebSocketSender;

    constructor(webSocketSender:WebSocketSender) {
        this.webSocketSender = webSocketSender;
    }

    public sendQuestion(pin:string, question:Question) {
        this.webSocketSender.sendMessage("Quiz/"+pin+"/question",question);
    }

}