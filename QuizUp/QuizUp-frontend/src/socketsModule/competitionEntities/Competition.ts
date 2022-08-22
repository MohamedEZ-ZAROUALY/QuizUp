import Question from "../quizEntities/Question";
import Quiz from "../quizEntities/Quiz";
import Player from "./Player";
import Score from "./Score";

export type PlayersObserver = (players:Player[], question?:Question) => void;

export default class Competition {
    private name:string;
    private quiz:Quiz;
    private players:Player[];
    private playersObserver:PlayersObserver;

    constructor(competitionName:string, quiz:Quiz, playersObserver:PlayersObserver) {
        this.name = competitionName;
        this.quiz = quiz;
        this.players = [];
        this.playersObserver = playersObserver;
    }
    
    public addPlayer = (Json) => {
        if (this.players.some(function(el:Player) { return el.getPlayerId() === Json.playerId;}) )
            throw Error("player already exist");
        if (this.players.some(function(el:Player) { return el.getName() === Json.playerName;}) )
            throw Error("name already exist");
        
        this.players.push(new Player(Json.playerId,Json.playerName));
        this.playersObserver(this.players, );
    }

    public getPlayersNames():string[] {
        let names:string[] =[]
        this.players.forEach(player => {
            names.push(player.getName());
        });
        return names;
    }

    public getName():string {
        return this.name;
    }
    
    public addAnswer = (playerId:string, answerJson, currentQuestion: Question) => {
        this.players.forEach(player => {
            console.log(player.getPlayerId() +"  " + playerId)
            if(player.getPlayerId() == playerId) {
                console.log(player.getPlayerId() +"  " + playerId + " nice ")
                this.playersObserver(this.players, currentQuestion );
                player.addAnswer(currentQuestion,answerJson);
                this.playersObserver(this.players, currentQuestion );
                return;
            }
        });

    }
    public getScores = () => {
        let scores:Score[] = [];
        this.players.forEach(player => {
            scores.push(player.getScore());
        })
        return scores;
    }
}