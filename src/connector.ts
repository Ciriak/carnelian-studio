// import { useDispatch } from "react-redux";

// import { setConnected } from "./store/connector/connector.action";
// import { Dispatch } from "react";
/**
 * Manage the connection and the events between the app and the Carnelian process
 */
export default class Connector {
    // private dispatch: Dispatch<any>;
    private ws?: WebSocket;
    constructor() {
        // this.dispatch = useDispatch();
        this.attemptConnection();
    }


    /**
     * Attempt a connection to the Carnelian process
     */
    attemptConnection() {

        console.log("Attempting connection to the carnelian process...")

        // try to connect
        this.ws = new WebSocket('ws://localhost:2319');
        this.ws.onopen = () => {
            this.handleConnected();
        }

        // Retry in 10 if failed to connect
        this.ws.onerror = () => {
            console.warn("Failed to connect => Retrying in 10 seconds...");
            setTimeout(() => {
                this.attemptConnection();
            }, 10000)
        }



        // ws.on('message', function incoming(data) {
        //     console.log(data);
        // });
    }

    private handleConnected() {
        console.log("Connected to the Carnelian process !");
        // this.dispatch(setConnected());
    }
}
