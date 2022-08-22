import WebSocketSender from "../websocket/WebSocketSender";



export default class ParticipationSender {


    private webSocketSender:WebSocketSender;

    constructor(webSocketSender:WebSocketSender) {
        this.webSocketSender = webSocketSender;
    }

    public sendParticipation(pin:string, playerId:string, playerName:string) {
        this.webSocketSender.sendMessage("Quiz/"+pin+"/connect",{playerId: playerId, playerName: playerName})
    }

}