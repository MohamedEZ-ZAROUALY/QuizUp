import Question from "./Question";


export default class Quiz {
    private name:string;
    private description:string;
    private questions:Question[];

        
    
    constructor(name:string, description:string, questions: Question[]) {
        this.name = name;
        this.description = description;
        this.questions = questions;
    }
    public addQuestion(question:Question) {
        this.questions.push(question);
    }

    public getName():string {
        return this.name;
    }
    public getDescription():string {
        return this.description;
    }
    public getQuestions():Question[] {
        return this.questions;
    }

}