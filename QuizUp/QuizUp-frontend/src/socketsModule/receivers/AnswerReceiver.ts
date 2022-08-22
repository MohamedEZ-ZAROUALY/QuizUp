import CompetitionController from "../competitionControllers/CompetitionController";

export default class AnswerReceiver implements IWebSocketSubscriber {
    private competitionController:CompetitionController;

    constructor(competitionController: CompetitionController) {
        this.competitionController = competitionController;

    }

    update = (messageObject: any) => {
        this.receiveAnswer(messageObject);
    }

    public receiveAnswer(answerJson) {
        let answer =JSON.parse(answerJson.body);
        this.competitionController.addAnswer(answer,answer.playerId);
    }

}