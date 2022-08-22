import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Score.css' ;

export default function Score() {

	
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
							<p>SCORES :</p>
						</div>
						<div className='scores'>
							<p className='information'><p>Chihab :</p><p>231</p></p>
							<p className='information'><p>Ahmad :</p><p>200</p></p>
							<p className='information'><p>Anas :</p><p>240</p></p>
							<p className='information'><p>Mohamed :</p><p>203</p></p>
						</div>
					</div>				
					<div className='bouttons'>
						<Link to='/play'>
							<button  clasName="play">Next Question</button>
						</Link>
					</div>

		</div>
	);
}
