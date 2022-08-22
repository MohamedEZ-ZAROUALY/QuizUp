package ma.ac.emi.projectquiz.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ma.ac.emi.projectquiz.model.Quiz;


public interface QuizRepository extends MongoRepository<Quiz, String> {
    
}
