import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import generateQuiz from "../../socketsModule/facade/FactoryFacade";
import Quiz from "../../socketsModule/quizEntities/Quiz";
import './quizcard.css';

interface quizCard {
  quiz:any;
}

function QuizCard({quiz}:quizCard) {
  const [mquiz, setQuiz] = useState<Quiz>();
  useEffect(()=> {
    setQuiz(generateQuiz(quiz));
  }, [quiz])

  return (
    <Link to={'/quiz/'+quiz.id}>
    <Card className="cardbox" sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://st2.depositphotos.com/1032749/7119/v/600/depositphotos_71194851-stock-illustration-quiz-speech-bubble-icon.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' , width: '100%'}}>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" textAlign="left" fontWeight="bold">
            {mquiz?.getName()}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" textAlign="left">
            {mquiz?.getDescription()}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pr: 1, pb: 1 , justifyContent: 'right'}}>
          <Link to={'/quiz/'+quiz.id}>
            <Button aria-label="previous" sx={{ fontWeight:'bold'}}>
              Details
            </Button>
          </Link>
         
        </Box>
      </Box>

    </Card>
    </Link>

  );

}

export default QuizCard;