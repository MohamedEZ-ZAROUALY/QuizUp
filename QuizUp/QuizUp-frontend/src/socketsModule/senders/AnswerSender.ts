import WebSocketSender from "../websocket/WebSocketSender";



export default class AnswerSender {


    private webSocketSender:WebSocketSender;

    constructor(webSocketSender:WebSocketSender) {
        this.webSocketSender = webSocketSender;
    }

    public sendAnswer(pin:string ,playerId:string, answerText:string) {
        this.webSocketSender.sendMessage("Quiz/"+pin+"/answer",{playerId: playerId,answerText:answerText})
    }

}