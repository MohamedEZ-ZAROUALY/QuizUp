import Competition  from "../competitionEntities/Competition";
import PinGenerator from "../generators/PinGenerator";
import QuestionsController from "../quizControllers/QuestionsController";
import Quiz from "../quizEntities/Quiz";
import ScoreSender from "../senders/ScoreSender";



export default class CompetitionController {
    private competition:Competition;
    private questionsController?:QuestionsController;
    private scoreSender:ScoreSender;
    private pin?:string;



    private pinGenerator:PinGenerator;
    constructor(pinGenerator:PinGenerator, competition:Competition, scoreSender:ScoreSender) {
        this.pinGenerator = pinGenerator;
        this.competition = competition;
        this.scoreSender = scoreSender;
    }
    public setQuestionController = (questionsController:QuestionsController) => {
        this.questionsController=questionsController;
    }
    public getQuestionController = () => {
        return this.questionsController;
    }


    public async hostCompetition():Promise<string> {
        this.pin = await this.pinGenerator.getPin();
        return this.pin;
    }
    

    public addPlayer = (playerJson) => {
        this.competition.addPlayer(playerJson);
        return this.competition.getName()
    }
    
    public addAnswer = (answerJson, playerId: string) => {
        if (this.questionsController)
        this.competition.addAnswer(playerId,answerJson,this.questionsController.getCurrentQuestion());

    }

    public sendScores = () => {
        this.competition.getScores().forEach(score => {
            this.scoreSender.sendScore(score.playerId,score.score);
        })
    }
}