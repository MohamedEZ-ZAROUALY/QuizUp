import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './join.css' ;

export default function Join() {
	
	const [counter, setCounter] = useState(15);

	
	return (
		<div className='app'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='quizz-card'>
						<div className='image-container'>
							<img className='image' src="https://static.hbo.com/content/dam/hbodata/series/chernobyl/key-art/chernobyl-ka-1920.jpg" alt="paris"/>
						</div>
						<div className='quizz-informations'>
							<p className='information'><p>Date :</p><p>23 / 05 / 2022</p></p>
							<p className='information'><p>Time per question :</p><p>20 s</p></p>
							<p className='information'><p>Questions :</p><p>14</p></p>
							<p className='information'><p>Points :</p><p>200</p></p>
						</div>
					</div>				
					<div className='details'>
						<p className='titre'>Details</p>
						<p> The Chernobyl disaster was a nuclear accident that occurred on 26 April 1986 at the No.
							4 reactor in the Chernobyl Nuclear Power Plant, near the city of Pripyat in the north of the Ukrainian SSR in the Soviet Union.
							It is considered the worst nuclear disaster in history both in cost and casualties
						</p>
					</div>
					<div className='bouttons'>
						<Link to='/'>
						<button  className="host">Leave</button>
						</Link>
						<button  className="play">Ready</button>
					</div>

		</div>
	);
}
