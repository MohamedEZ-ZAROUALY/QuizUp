import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnswerState.css' ;

export default function AnswerState() {

	
	return (
		<div className='score-wrapper'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='score-container'>
						<div className='score-title'>
                            <div className='question-count'>
                                <span>Question 1 / 15 </span>
                            </div>
                            <div className='question-text'><p>Question</p></div>
						</div>
						<div className='scores'>
							<p className='information'><p>Chihab :</p><p>Answered</p></p>
							<p className='information'><p>Ahmad :</p><p>Answered</p></p>
							<p className='information'><p>Anas :</p><p>Didn't answered yet</p></p>
							<p className='information'><p>Mohamed :</p><p>Didn't answered yet</p></p>
						</div>
					</div>				
					<div className='bouttons'>
						<Link to='/score'>
							<button  clasName="play">Show question</button>
						</Link>
					</div>

		</div>
	);
}
