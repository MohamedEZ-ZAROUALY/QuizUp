package ma.ac.emi.projectquiz.mongodbTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ma.ac.emi.projectquiz.model.Quiz;
import ma.ac.emi.projectquiz.model.Choice;
import ma.ac.emi.projectquiz.model.Question;
import ma.ac.emi.projectquiz.repository.QuizRepository;

@SpringBootTest
public class QuizSavingTest {

    @Autowired
    private QuizRepository quizRepository;

    @Test
    public void saveQuizAndRetreiveIt() {

        quizRepository.deleteAll();
        
        List<Choice> choices = new ArrayList<>();
        choices.add(new Choice(0, "green"));
        choices.add(new Choice(50, "blue"));
        choices.add(new Choice(20, "red"));
        choices.add(new Choice(10, "yello"));
        List<Question> questions = new ArrayList<>();
        questions.add(new Question("what color is the sky", choices ));
        Quiz expectedQuiz = new Quiz("test", "desc", questions);
        quizRepository.save(expectedQuiz);
        
        assertNotEquals(0, quizRepository.count());
        Quiz actualQuiz = quizRepository.findAll().get(0);
        assertEquals(expectedQuiz.getName(), actualQuiz.getName());
        assertEquals(expectedQuiz.getDescription(), actualQuiz.getDescription());

    }



    
}
