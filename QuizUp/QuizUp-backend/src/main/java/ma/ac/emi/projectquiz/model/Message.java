package ma.ac.emi.projectquiz.model;


public class Message {

    private String message;
    
    public Message() {}
    public Message(String message) {
        this.setMessage(message);
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


}
