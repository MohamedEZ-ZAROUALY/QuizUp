package ma.ac.emi.projectquiz.model;

public class Choice {
    private double score;
    private String text;

    public Choice(double score, String text) {
        this.score = score;
        this.text = text;
    }

    public double getScore() {
        return score;
    }
    public String getText() {
        return text;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public void setText(String text) {
        this.text = text;
    }
    
}
