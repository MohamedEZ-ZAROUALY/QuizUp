import Quiz from "../quizEntities/Quiz";
import QuizFactory from "../quizEntities/QuizFactory";


export default class QuizController {
    private quizzes:Quiz[];
    private quizFactory:QuizFactory;

    constructor() {
        this.quizzes= [];
        this.quizFactory = new QuizFactory();
    }


    public addQuiz(quizJson) {
        this.quizzes.push(this.quizFactory.createQuiz(quizJson));
    }
    public removeQuiz(quizIndex:number) {
        this.quizzes.splice(quizIndex, 1);
    }

    public getQuiz():Quiz[] {
        return this.quizzes;
    }
}