import CompetitionController from "../competitionControllers/CompetitionController";
import ParticipationAcceptenceSender from "../senders/ParticipationAcceptenceSender";


export default class ParticipationReceiver implements IWebSocketSubscriber {

    private competitionController:CompetitionController;
    private participationAcceptenceSender:ParticipationAcceptenceSender;

    constructor(competitionController:CompetitionController,participationAcceptenceSender:ParticipationAcceptenceSender ) {
        this.competitionController=competitionController;
        this.participationAcceptenceSender=participationAcceptenceSender;

    }

    update = (messageObject: any) => {
        this.receiveParticipation(messageObject);
    }

    public receiveParticipation(participationJson) {
        try {
            let playerJson =JSON.parse(participationJson.body);
            let competitionName = this.competitionController.addPlayer(playerJson);
            if (competitionName===undefined) competitionName ="";
            this.participationAcceptenceSender.sendAcceptence(playerJson.playerId, competitionName);
        } catch(err) {
            console.log(err);
            
        }
    }

}