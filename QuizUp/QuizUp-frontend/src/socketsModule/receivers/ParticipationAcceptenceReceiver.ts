import ParticipationController from "../participationControllers/ParticipationController";

export default class ParticipationAcceptenceReceiver implements IWebSocketSubscriber {

    private participationController:ParticipationController;

    constructor(participationController:ParticipationController) {
        this.participationController = participationController;

    }

    update = (messageObject: any) => {
        this.receiveParticipationAcceptence(messageObject);
    }

    public receiveParticipationAcceptence(participationAcceptenceJson) {
        this.participationController.setCompetitionName(JSON.parse(participationAcceptenceJson.body).competitionName);
        this.participationController.setPlayerId(JSON.parse(participationAcceptenceJson.body).playerId);
        
    }

}