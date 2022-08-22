import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../HostWait/HostWait.css' ;
import { createCompetition, nextQuestion, startCompetition } from "../../socketsModule/facade/HostFacade";
import QuestionsController from "../../socketsModule/quizControllers/QuestionsController";
import Question from "../../socketsModule/quizEntities/Question";
import Quiz from "../../socketsModule/quizEntities/Quiz";
import AnswerState , {PlayerAnswered} from '../AnswerState/AnsweringState';
import Choice from '../../socketsModule/quizEntities/Choice';
import Player from '../../socketsModule/competitionEntities/Player';
import CompetitionController from '../../socketsModule/competitionControllers/CompetitionController';
import Scores from '../Score/Scores';
import generateQuiz from '../../socketsModule/facade/FactoryFacade';


interface IHostFile {
	quiz:Quiz;
}

export default function HostFile({quiz}:IHostFile) {

	
	const [pin, setPin] = useState('')
    const [qc, setQC] = useState<QuestionsController>()
    const [players, setPlayers] = useState<Player[]>([])
    const [questionNum, setQN] = useState(0);
    const [competitionController, setCC] = useState<CompetitionController>();
	const [playersNans, setPlayersNans] = useState<PlayerAnswered[]>([])
	const [showingScores, setShowingScores] = useState(false);
	const [finished, setfinished] = useState(false);


    const playerObserver = (players:Player[], question?:Question) => {
		setPlayers(players); console.log("change happended");
		console.log(question);
		let playernans:PlayerAnswered[] = [];
		players.map((player) => {
			let playernan:PlayerAnswered = {
				playername: player.getName(),
				answered:  question!=undefined && player.didAnswer(question)
			}
			if (question)
			console.log(player.didAnswer(question))
			playernans.push(playernan);
		})
		setPlayersNans(playernans);
		console.log(playernans);
		};
 	// const quiz = new Quiz('name','desc',[new Question("test1",[new Choice(0,"wrong"), new Choice(1,"right")]),new Question("test2",[new Choice(0,"wrong2"), new Choice(1,"right2")])]);
    const host = ()=> {
		if(quiz)
        createCompetition(quiz,playerObserver)
        .then(cc => {
            setQC(cc.getQuestionController());
			setCC(cc);
			if (qc)
            setPin(qc.getPin())
        } );
    }
    const start = () => {
        if (qc) {
        startCompetition(qc);
		setQN(1);
		if (qc.getCount()==1)
			setfinished(true);
		}
		
    }
    const next = () => {
        if (qc && !finished) {
  	    	nextQuestion(qc);
			if (qc.getCount()==questionNum+1)
				setfinished(true);
			setQN(questionNum+1);
			setShowingScores(false);
		}
    }
	const showScores = () => {
		competitionController?.sendScores();
		setShowingScores(true);
		let playernans:PlayerAnswered[] = [];
		players.map((player) => {
			let playernan:PlayerAnswered = {
				playername: player.getName(),
				answered:  false
			}
			playernans.push(playernan);
		})
		setPlayersNans(playernans);
	}

	useEffect(() => {
	  host();
	}, [quiz])
	useEffect(() => {
		if (qc)
		setPin(qc?.getPin());
	}, [qc])
	
	//if(!qc) return <>sad</>;
	if (showingScores) {
		return (<Scores finished={finished} players={players} questionNumber={questionNum} nextQuestion={next}></Scores>);
	}

	if (questionNum !=0){
		return (<AnswerState players={players} playerAnswered={playersNans} currentQuestion={qc?.getCurrentQuestion()} questionNumber={questionNum} showScores={showScores}/>)
	}
	
	return (
		<div className='app'>
					<div className='theme'>
							MyQuiz			
					</div>
					<div className='quizz-card'>
						<div className='image-container'>
							<img className='image' src="https://st2.depositphotos.com/1032749/7119/v/600/depositphotos_71194851-stock-illustration-quiz-speech-bubble-icon.jpg" alt="paris"/>
						</div>
						<div className='quizz-informations'>
							<h2>Code: {pin}</h2>
						</div>
					</div>				
					<div className='details'>
						<p className='titre'>Participants:</p>
						<p>
							{players.map((player1)=> <>{player1.getName()} </>)}
						</p>
					</div>
					<div className='bouttons'>
						<button  >Cancel</button>
						<button onClick={start} >Start the Quiz</button>
					</div>

		</div>
	);
}
