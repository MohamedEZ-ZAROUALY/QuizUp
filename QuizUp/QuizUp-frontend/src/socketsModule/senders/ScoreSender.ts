import WebSocketSender from "../websocket/WebSocketSender";



export default class ScoreSender {


    private webSocketSender:WebSocketSender;

    constructor(webSocketSender:WebSocketSender) {
        this.webSocketSender = webSocketSender;
    }

    public sendScore(playerId:string, score:number) {
        this.webSocketSender.sendMessage("Players/"+playerId+"/score",{score:score})
    }

}