import React, { useState, useEffect } from 'react';
import './Question.css';
import { useParams } from 'react-router-dom';
import generateQuiz from '../../socketsModule/facade/FactoryFacade';

export default function Question() {
	const [quiz, setQuiz] =useState();
	const [questions, setQuestions] =useState();
	const { id } = useParams();
	useEffect(() => {
		fetch("http://"+process.env.REACT_APP_SERVER_ADDRESS+":8080/quiz?id="+id)
            .then(response => response.json())
            .then(data => {
				console.log(data);
				const q = generateQuiz(data);
				setQuiz(q)
				setQuestions(q.getQuestions());
			});
	}, [id])


	// const questions = [
	// 	{
	// 		questionText: 'What is the capital of France?',
	// 		answerOptions: [
	// 			{ answerText: 'New York', isCorrect: false },
	// 			{ answerText: 'London', isCorrect: false },
	// 			{ answerText: 'Paris', isCorrect: true },
	// 			{ answerText: 'Dublin', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Who is CEO of Tesla?',
	// 		answerOptions: [
	// 			{ answerText: 'Jeff Bezos', isCorrect: false },
	// 			{ answerText: 'Elon Musk', isCorrect: true },
	// 			{ answerText: 'Bill Gates', isCorrect: false },
	// 			{ answerText: 'Tony Stark', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'The iPhone was created by which company?',
	// 		answerOptions: [
	// 			{ answerText: 'Apple', isCorrect: true },
	// 			{ answerText: 'Intel', isCorrect: false },
	// 			{ answerText: 'Amazon', isCorrect: false },
	// 			{ answerText: 'Microsoft', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'How many Harry Potter books are there?',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: false },
	// 			{ answerText: '4', isCorrect: false },
	// 			{ answerText: '6', isCorrect: false },
	// 			{ answerText: '7', isCorrect: true },
	// 		],
	// 	},
	// ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [counter, setCounter] = useState(15);

	React.useEffect(() => {
		const timer =
		counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		if(counter==0) handleAnswerOptionClick(false)
		return () => clearInterval(timer);
	  }, [counter]);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		setCounter(15);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	if (!questions)
		return (<></>);
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1} / {questions.length} </span>
						</div>
						<div className="timer">
							<div>Countdown: <span className="dot">{counter}</span></div>
						</div>
						<br/>
						<div className='question-text'><p>{questions[currentQuestion].question}</p></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].choices.map((choice) => (
							<button  onClick={() => handleAnswerOptionClick(choice.score!=0)}>{choice.text}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
