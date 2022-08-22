
import StompClient from "stomp-client";

export default class WebSocketPublisher {
    private stompClient: StompClient;

    constructor(stompClient: StompClient) {
        this.stompClient= stompClient;
    }

    /**
     * 
     * subscribe to the link websocket
     */
    public subscribe(webSocketSubscriber:IWebSocketSubscriber, link:string) {
        this.stompClient.subscribe("/topic/"+link, webSocketSubscriber.update);
    }


}