import ScoreController from "../participationControllers/ScoreController";

export default class ScoreReceiver implements IWebSocketSubscriber {
    private scoreController:ScoreController;

    constructor(scoreController: ScoreController) {
        this.scoreController = scoreController;

    }

    update = (messageObject: any) => {
        this.receiveScore(messageObject);
    }

    public receiveScore(scoreJson) {
        this.scoreController.setScore(JSON.parse(scoreJson.body).score);
    }

}