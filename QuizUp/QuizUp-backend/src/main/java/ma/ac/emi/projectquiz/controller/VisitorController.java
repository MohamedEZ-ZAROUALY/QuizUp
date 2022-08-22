package ma.ac.emi.projectquiz.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ma.ac.emi.projectquiz.model.Message;
import ma.ac.emi.projectquiz.model.Quiz;
import ma.ac.emi.projectquiz.repository.QuizRepository;

@RestController
public class VisitorController {

  @Autowired
  private QuizRepository quizRepository;
    
  @MessageMapping("/connect/{code}")
  @SendTo("/topic/{code}")
  public Message participate(@DestinationVariable String code,Message message) {
    System.out.println(code);
    return message;
  }

  @CrossOrigin
  @GetMapping("quizzes")
  public List<Quiz> getQuizzes() {
    return quizRepository.findAll();
  }

  @CrossOrigin
  @GetMapping("quiz")
  public Optional<Quiz> getQuizzes(@RequestParam String id) {
    return quizRepository.findById(id);
  }

  @MessageMapping("/Quiz/{code}")
  @SendTo("/topic/Quiz/{code}")
  public Quiz sendQuiz(@DestinationVariable String code,Quiz quiz) {
    System.out.println(code);
    System.out.println(quiz.getName());
    return quiz;
  }

  @MessageMapping("/Quiz/{pin}/connect")
  @SendTo("/topic/Quiz/{pin}/connect")
  public String sendParticipation(@DestinationVariable String pin, String participation) {
    return participation;
  }

  @MessageMapping("/Players/{playerId}/score")
  @SendTo("/topic/Players/{playerId}/score")
  public String sendScore(@DestinationVariable String playerId, String score) {
    return score;
  }
  @MessageMapping("/Quiz/{pin}/question")
  @SendTo("/topic/Quiz/{pin}/question")
  public String sendQuestion(@DestinationVariable String pin, String question) {
    return question;
  }

  @MessageMapping("/Quiz/{pin}/answer")
  @SendTo("/topic/Quiz/{pin}/answer")
  public String sendAnswer(@DestinationVariable String pin, String AnswerText) {
    return AnswerText;
  }
  
  @MessageMapping("/Players/{playerId}/acceptence")
  @SendTo("/topic/Players/{playerId}/acceptence")
  public String sendAcceptence(@DestinationVariable String playerId, String acceptence) {
    return acceptence;
  }

}
