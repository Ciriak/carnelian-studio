import { store } from "./store"
import { setConnected } from "./store/connector/connector.action";
import { Dispatch } from "react";
import Carnelian from "carnelian";
import { ClientEvent } from "carnelian/types/enums/clientEvent.enums";
import ISocketData from "carnelian/types/interfaces/socketData.interface";
import { setConfig } from "./store/config/config.action";
/**
 * Manage the connection and the events between the app and the Carnelian process
 */
export default class Connector {
    private dispatch: Dispatch<any>;
    private ws: WebSocket;
    constructor() {
        this.dispatch = store.dispatch;
        this.ws = new WebSocket('ws://localhost:2319');
        this.attemptConnection();
    }


    /**
     * Attempt a connection to the Carnelian process
     */
    attemptConnection() {

        console.log("Attempting connection to the carnelian process...")

        // try to connect

        this.ws.onopen = (e) => {
            this.handleConnected(this.ws);
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

    /**
     * Send a message to the Carnelian process if a connection is open
     * @param event 
     * @param data 
     */
    private send(event: ClientEvent, data?: any) {

        this.ws.send(JSON.stringify({
            event,
            data
        }))
        const dataString = data || "{empty}"
        console.log(`SK >>> [${event.toUpperCase()}] :: ${dataString}`);
    }

    private handleConnected(ws: WebSocket) {
        console.log("Connected to the Carnelian process !");
        this.dispatch(setConnected());
        this.send(Carnelian.Enums.ClientEvent.ClientEvent.REQUEST_CONFIG);

        ws.onmessage = (message) => {
            const data = this.parseMessage(message);
            if (data) {
                this.handleSocketData(data);
            }
        }

    }

    private parseMessage(message: MessageEvent): ISocketData | null {
        let data: ISocketData;
        // ignore if the message data format is not a string
        if (typeof message.data !== "string") {
            return null;
        }
        try {

            data = JSON.parse(message.data);

        } catch (error) {
            console.warn("Unable to parse the socket data : \n" + error)
            return null;
        }

        console.log(`SK <<< [${data.event}]`);
        return data;
    }

    private handleSocketData(socket: ISocketData) {
        switch (socket.event) {
            case Carnelian.Enums.ServerEvent.ServerEvent.SEND_CONFIG:

                this.dispatch(setConfig(socket.data));

                break;

            default:
                break;
        }
    }
}
