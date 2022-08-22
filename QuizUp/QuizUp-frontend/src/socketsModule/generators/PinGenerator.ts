

export default class PinGenerator {

    public getPin():Promise<string> {
        return fetch("http://"+process.env.REACT_APP_SERVER_ADDRESS+":8080/v1/new-id")
            .then(res => res.json())
            .then(res => res.message)
    }
}

