import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Player from '../../socketsModule/competitionEntities/Player';
import Question from '../../socketsModule/quizEntities/Question';
import './AnswerState.css' ;

export type PlayerAnswered = {
	playername: string,
	answered: boolean
}
interface Iprops {
    players: Player[];
    currentQuestion?: Question;
    questionNumber: number;
	playerAnswered:PlayerAnswered[];
	showScores: ()=>void;
}


export default function AnswerState(props:Iprops) {

	
	

	const didAnswer = (answred:boolean) => {
		if (answred) 
			return "did answer";
		return "didn't answer yet"
	}
	
	return (
		<div className='score-wrapper'>
					<div className='theme'>
							Quiz Hosting			
					</div>
					<div className='score-container'>
						<div className='score-title'>
                            <div className='question-count'>
                                <span>Question { props.questionNumber} </span>
                            </div>
                            <div className='question-text'><p>{props.currentQuestion?.getQuestionText()}</p></div>
						</div>
						<div className='scores'>
							{props.playerAnswered.map((player)=> 
								<p className='information'><p>{player.playername} :</p><p>{didAnswer(player.answered)}</p></p>
							)}
						
						</div>
					</div>				
					<div className='bouttons'>
						<button onClick={()=>{props.showScores()}} className="play">Show scores</button>
					</div>

		</div>
	);
}
