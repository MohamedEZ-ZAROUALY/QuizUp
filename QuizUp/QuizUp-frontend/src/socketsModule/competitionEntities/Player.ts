import Question from "../quizEntities/Question";
import Answer from "./Answer";
import Score from "./Score";

export default class Player {
    private playerId:string;
    private name:string;
    private answers:Answer[];
    
    constructor(playerId:string, name:string) {
        this.playerId=playerId;
        this.name = name;
        this.answers = [];
    }
    public getPlayerId():string {
        return this.playerId;
    }
    public getName():string {
        return this.name;
    }
    public addAnswer(currentQuestion:Question, answerJson) {
        console.log("addin answering");
        if (!this.didAnswer(currentQuestion))
        this.answers.push(new Answer(currentQuestion, answerJson.answerText, Date.now()))

    }
    public getScore():Score {
        let score = 0;
        this.answers.forEach(answer => {
            score += answer.getScore();
        });
        return {playerId:this.playerId, score:score};
    }
    public didAnswer = (question:Question) => {
        console.log("checking answering");
        console.log(this.answers);
        let answered= false;

        this.answers.forEach(answer => {
            if (answer.getQuestion().getQuestionText() == question.getQuestionText()) {
                console.log("this should return true");
                answered= true;
            }
        });
        console.log("this should return false");
        return answered;
    } 
}