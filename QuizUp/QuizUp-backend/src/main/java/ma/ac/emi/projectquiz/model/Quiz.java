package ma.ac.emi.projectquiz.model;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Quiz {
    @Id
    public String id;

    private String name;
    private String description;
    private List<Question> questions;
    public Quiz(String name, String description, List<Question> questions) {
        this.name = name;
        this.description = description;
        this.questions = questions;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public List<Question> getQuestions() {
        return questions;
    }
    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    
}
