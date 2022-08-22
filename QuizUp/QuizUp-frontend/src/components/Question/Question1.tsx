import React, { useEffect, useState } from 'react';
import AnsweringController from '../../socketsModule/playingControllers/AnsweringController';
import Choice from '../../socketsModule/quizEntities/Choice';
import Question from '../../socketsModule/quizEntities/Question';
import './Question.css';

interface Quest {
	question: Question,
	answeringController: AnsweringController,
	pin:string,
	playerId:string
	score:number
}
export default function Question1({question, answeringController, pin, playerId, score}: Quest) {
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [didAnswer, setDidAnswer] = useState(false);

	const choseAnswer = (choice:Choice) => {
		answeringController.answer(choice,pin,playerId);
		setDidAnswer(true);
	}
	useEffect(() => {
		setDidAnswer(false);
	}, [question])
	
	if (didAnswer && score ==-1)
	return (<div className='card' style={{textAlign: "center"}}>
			<h2>{question.getQuestionText()}</h2>
			<h4> Your answer was sent <br></br> wait for the next question or score</h4>
	</div>);
	
	if (score !=-1)
	return (<div className='card' style={{textAlign: "center"}}>
			<h2>{question.getQuestionText()}</h2>
			<h4> Your score is {score} </h4>
	</div>);

	return (
		<div className='app'>
				<>
					<div className='question-section'>
						<div className='question-text'><h2>{question.getQuestionText()}</h2></div>
					</div>
					{/* <div className='image-container'>
					<img src="https://www.museos.com/wp-content/uploads/2021/02/Eiffelturm-Paris6-scaled.jpg" alt="paris"/>
					</div> */}
					<div className='answer-section'>
						{question.getChoices().map((choice) => (
							<button  onClick={()=>choseAnswer(choice)}>{choice.getText()}</button>
						))}
					</div>
				</>
		</div>
	);
}
