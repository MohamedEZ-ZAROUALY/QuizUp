

export type ScoreObserver = (score: number) => void;

export default class ScoreController {
    private score:number;

    private scoreObserver:ScoreObserver;

    constructor(scoreObserver:ScoreObserver) {
        this.scoreObserver = scoreObserver;
        this.score=0;
    }
    
    public getScore = () => {
        return this.score;
    }
    public setScore = (score:number) => {
        this.score = score;
        this.scoreObserver(score);
    }
}