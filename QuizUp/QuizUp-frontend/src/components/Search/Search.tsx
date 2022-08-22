import { useEffect, useState } from "react";
import QuizCard from "../QuizCard/QuizCard";
import { useSearchParams } from "react-router-dom";


import './search.css';
import Quiz from "../../socketsModule/quizEntities/Quiz";



export default function Search() {


    const [searchParams, setSearchParams] = useSearchParams();


    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [searchedQuizzes, setSQuizzes] = useState<Quiz[]>([]);
    useEffect(() => {
        fetch("http://"+process.env.REACT_APP_SERVER_ADDRESS+":8080/quizzes")
            .then(response => response.json())
            .then(data => {setQuizzes(data); setSQuizzes(search(data)); console.log(data);});
    
    }, [])
    const search = (data) => {
        const mc =searchParams.get("motcle"); 
        if (!mc)
            return data;
        let tquizzes:any[]= []
        data.forEach(quiz => {
            if (quiz.name.includes(mc) ||quiz.description.includes(mc) )
                tquizzes.push(quiz);
        });
        return tquizzes;

    }
    useEffect(() => {
        setSQuizzes(search(quizzes));
    },[searchParams.get("motcle")])
    
    
    return (
        <div>
            {/* <h3 className="link">Explore / search="Countries"</h3> */}
            <div className="searchList">
                {searchedQuizzes.map((quiz) => <div className="card"><QuizCard  quiz={quiz}/></div>)}
            </div>
        </div>
    )
}
