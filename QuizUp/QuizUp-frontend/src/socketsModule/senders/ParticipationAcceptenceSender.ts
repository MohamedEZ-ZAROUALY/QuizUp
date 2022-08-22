import WebSocketSender from "../websocket/WebSocketSender";



export default class ParticipationAcceptenceSender {


    private webSocketSender:WebSocketSender;

    constructor(webSocketSender:WebSocketSender) {
        this.webSocketSender = webSocketSender;
    }

    public sendAcceptence(playerId:string, competitionName:string) {
        this.webSocketSender.sendMessage("Players/"+playerId+"/acceptence",{competitionName:competitionName, playerId:playerId})
    }

}