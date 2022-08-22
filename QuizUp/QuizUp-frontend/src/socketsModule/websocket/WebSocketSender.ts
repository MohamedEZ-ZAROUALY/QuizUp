
import StompClient from "stomp-client";


export default class WebSocketSender {

    private stompClient:StompClient;
    constructor(stompClient: StompClient) {
        this.stompClient = stompClient;
    }


   /**
    * send message to the destination through websockets
    */
   public sendMessage(destination:string, messageObject) {
       
       this.stompClient.send(
           "/app/"+destination,
           {},
           JSON.stringify(messageObject)
       );
   }
}