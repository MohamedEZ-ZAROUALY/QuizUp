import AnsweringController from "../playingControllers/AnsweringController";
import QuestionManager from "../playingControllers/QuestionManager";


export default class QuestionReceiver implements IWebSocketSubscriber {

    private questionManager:QuestionManager;

    constructor(questionManager: QuestionManager) {
        this.questionManager = questionManager;
    }

    public update = (messageObject: any)=> {
        this.receiveQuestion(messageObject);
    }

    public receiveQuestion(questionJson) {
        this.questionManager.setQuestion(JSON.parse(questionJson.body));
    }

}