import Choice from "./Choice";


export default class Question {

    private question:string;
    private choices:Choice[]; 


    constructor(question:string, choices:Choice[]) {
        this.question = question;
        this.choices = choices;

    }

    public getQuestionText():string {
        return this.question;
    }
    public getAnswerScore(answerText:string):number {
        for (var choice of this.choices) {
            if (choice.verifyAnswer(answerText)) {
                return choice.getScore();
            }
        }
        return 0;
    }
    public setChoices(choicesJson) {
        choicesJson.forEach(choice => {
            this.choices.push(new Choice(Number(choice.score),choice.text))
        });
    }
    public getChoices():Choice[] {
        return this.choices;

    }
    public getSendingVersion() {
        let sendingChoices:Choice[] = [];
        this.choices.forEach(choice => {
            let sendingChoice = new Choice(0,choice.getText());
            sendingChoices.push(sendingChoice);
        });
        return new Question(this.question,sendingChoices);
    }
    public setChoicesJson(choicesJson) {
        choicesJson.forEach(choice => {
            this.choices.push(new Choice(choice.score,choice.text));
        });


    }
}