import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import generateQuiz from '../../socketsModule/facade/FactoryFacade';
import Quiz from '../../socketsModule/quizEntities/Quiz';
import './Details.css' ;

export default function Details() {

	
	// const [counter, setCounter] = useState(15);

	// React.useEffect(() => {
	// 	const timer =
	// 	counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
	// 	return () => clearInterval(timer);
	//   }, [counter]);

	const [quiz, setQuiz] =useState();
	const { id } = useParams();
	useEffect(() => {
		fetch("http://"+process.env.REACT_APP_SERVER_ADDRESS+":8080/quiz?id="+id)
            .then(response => response.json())
            .then(data => {setQuiz(generateQuiz(data)); console.log(data);});
	}, [id])
	


	
	return (
		<div className='details-app'>
					<div className='theme'>
							{!!quiz && quiz.getName()}			
					</div>
					<div className='quizz-card'>
						<div className='image-container'>
							<img className='image' src="https://st2.depositphotos.com/1032749/7119/v/600/depositphotos_71194851-stock-illustration-quiz-speech-bubble-icon.jpg" alt="paris"/>
						</div>
						<div className='quizz-informations'>
							<p className='information-1'>
								<p>Questions :</p>
								<p>Time per question :</p>
							</p>
							<p className='information-2'>
								<p>{!!quiz && quiz.getQuestions().length}</p>
								<p>15 s</p>
							</p>
						</div>
					</div>				
					<div className='details'>
						<p className='titre'>Details</p>
						<p> 
							{!!quiz && quiz.getDescription()}
						</p>
					</div>
					<div className='bouttons'>
						<Link to={'/host/'+id}>
							<button  className="host">Host</button>
						</Link>
						<Link to={'/play/'+id}>
							<button  className="play">Play</button>
						</Link>
					</div>

		</div>
	);
}
