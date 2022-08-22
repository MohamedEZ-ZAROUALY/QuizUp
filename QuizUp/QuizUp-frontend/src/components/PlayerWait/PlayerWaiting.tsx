import React, { useEffect } from 'react';
import { FormEvent, FormEventHandler, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import Question from '../../socketsModule/quizEntities/Question';
import ParticipantFacade from '../../socketsModule/facade/ParticipantFacade';
import './PlayerWait.css' ;
import Question1 from '../Question/Question1';
import Choice from '../../socketsModule/quizEntities/Choice';
import AnsweringController from '../../socketsModule/playingControllers/AnsweringController';



export default function PlayerWaiting() {

	const [searchParams, setSearchParams] = useSearchParams();
	let name = searchParams.get("name");
	const pin = searchParams.get("pin");


	const [currentQuestion, setCurrentQuestion] = useState<Question>();


	if (name == null) {
		name = "unamedPlayer";
	}

	const [id, setId] = useState<string>();
	const [accepted, setAccepted] = useState(false);
	const [ready, setReady] = useState(false);
    const questionObserver = (question:Question)=> {
		setCurrentQuestion(question);
		setScore(-1);
	}
	const participationObserver = (id:string) => {setAccepted(true); setId(id)};

	const [answerController,setAnswerController] = useState<AnsweringController>();
	const [score,setScore] = useState(-1);
	// const set2 =(send2:(choice:Choice) => void) => {
	// 	setAnswerSender(send2);
	// 	console.log(send2);
	// 	console.log("test");
	// 	console.log(sendAnswer);
	// }
	const scoreObserver = (score:number) => {
		console.log("your score is %d", score);
		setScore(score);
	}
    
	const setId2 = (newId:string) => {
		if (!id)
			setId(newId)
	}
	useEffect(() => {
		if (pin && name) {
       		setAnswerController(ParticipantFacade.participate(pin, name, participationObserver, questionObserver, setId2, scoreObserver));
		}
	}, [pin,name]);

	if (pin==null) {
		return (<h1>no pin!!!!</h1>);
	}


	if (!accepted || !answerController || !id)
		return (<h1>Connecting ...</h1>);
	if (currentQuestion == null)
		return (<h1>Waiting for the host to start the quiz...</h1>);
	
	return (
		<>
			<Question1 question={currentQuestion} answeringController={answerController} pin={pin} playerId={id} score = {score}></Question1>
		</>
	);
}
