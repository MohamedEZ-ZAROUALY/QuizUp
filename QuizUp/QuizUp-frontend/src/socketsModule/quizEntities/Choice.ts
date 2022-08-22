

export default class Choice {
    private score:number;
    private text:string;
    
    constructor(score:number, text:string) {
        this.score = score;
        this.text = text;
    }
    public verifyAnswer(answerText:string) {
        return answerText == this.getText();
    }

    public getScore():number {
        return this.score;
    }
    public getText = () => {
        return this.text;
    }

}