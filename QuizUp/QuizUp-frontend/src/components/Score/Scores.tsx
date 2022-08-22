import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { finished } from 'stream';
import Player from '../../socketsModule/competitionEntities/Player';
import './Score.css' ;

interface scores {
	players:Player[];
    questionNumber: number;
	nextQuestion: ()=>void;
	finished: boolean;
}

export default function Scores(props:scores) {


	return (
		<div className='score-wrapper'>
					<div className='theme'>
							Hosting a Quiz		
					</div>
					<div className='score-container'>
						<div className='scorPOLJBe-title'>
                            <div className='question-count'>
                                <span>Question {props.questionNumber} 
									{props.finished && <> (Quiz ended)</>}
								</span>
                            </div>
							<p>SCORES :</p>
						</div>
						<div className='scores'>
							{props.players.map((player) => 
								<p className='information'><p>{player.getName()} :</p><p>{player.getScore().score}</p></p>
							)}
						</div>
					</div>				
					{!props.finished &&
					<div  className='bouttons'>
						<button onClick={()=>{props.nextQuestion()}} className="play">Next Question</button>
					</div>}

		</div>
	);
}
