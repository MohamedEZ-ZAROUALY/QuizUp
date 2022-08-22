

export default class IdGenerator {
    
    private id?:string;
    
    public getId = async () => {

        if (this.id)
            return this.id;


        const res = await fetch("http://"+process.env.REACT_APP_SERVER_ADDRESS+":8080/v1/new-player-id");
        const resjson = await res.json();
        const message = resjson.message;
        this.id = message;

        return this.id;
    }
}