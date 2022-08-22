import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import CompetitionController from "../competitionControllers/CompetitionController";
import Competition, { PlayersObserver } from "../competitionEntities/Competition";
import PinGenerator from "../generators/PinGenerator";
import QuestionsController from "../quizControllers/QuestionsController";
import Quiz from "../quizEntities/Quiz";
import AnswerReceiver from "../receivers/AnswerReceiver";
import ParticipationReceiver from "../receivers/ParticipationReceiver";
import ParticipationAcceptenceSender from "../senders/ParticipationAcceptenceSender";
import QuestionSender from "../senders/QuestionSender";
import ScoreSender from "../senders/ScoreSender";
import WebSocketPublisher from "../websocket/WebSocketPublisher";
import WebSocketSender from "../websocket/WebSocketSender";


// need to call competitionController.host to get the pin
const createCompetition  =  async (quiz:Quiz, playersObserver:PlayersObserver) => {

    
    const stompClient = Stomp.over(new SockJS("http://"+process.env.REACT_APP_SERVER_ADDRESS+":8080/ws"));
    const webSocketPublisher = new WebSocketPublisher(stompClient);
    const webSocketSender = new WebSocketSender(stompClient);
    const participationAcceptenceSender = new ParticipationAcceptenceSender(webSocketSender);
    const scoreSender = new ScoreSender(webSocketSender);

    const competition = new Competition(quiz.getName(),quiz,playersObserver);
    const competitionController = new CompetitionController(new PinGenerator(),competition, scoreSender);
    const pin = await competitionController.hostCompetition();

    const participationReceiver = new ParticipationReceiver(competitionController, participationAcceptenceSender);
    const answerReceiver = new AnswerReceiver(competitionController);


    // subscribe to websocket waiting for player participation
    const onConnected = () => {
        webSocketPublisher.subscribe(participationReceiver,"Quiz/"+pin+"/connect");
        webSocketPublisher.subscribe(answerReceiver,"Quiz/"+pin+"/answer");
    };
    const onError = (err) => {console.log(err)};
    stompClient.connect({}, onConnected, onError);




    const questionSender = new QuestionSender(webSocketSender);
    const questionsController = new QuestionsController(pin,questionSender,quiz.getQuestions());
    competitionController.setQuestionController(questionsController);

    return  competitionController;

}

const startCompetition = (questionsController:QuestionsController) => {
    questionsController.sendCurrentQuestion();
    return questionsController.getCurrentQuestion();

}

const nextQuestion = (questionsController:QuestionsController) => {
    questionsController.nextQuestion();
    questionsController.sendCurrentQuestion();
    return questionsController.getCurrentQuestion();
};



export {createCompetition, startCompetition, nextQuestion}

