import { ClientEvent } from "carnelian/types/enums/clientEvent.enums";
import Carnelian from "carnelian";
import { parseMessage } from "./utils/socket.utils";
import ISocketData from "carnelian/types/interfaces/socketData.interface";

export default class ConnectorManager {
    ws: WebSocket;
    constructor() {
        this.ws = new WebSocket('ws://localhost:2319');
        this.handleConnection();
    }

    /**
     * Attempt a connection to the Carnelian process
     */
    handleConnection() {
        console.log("Attempting connection to the carnelian process...")

        // setConnector({ ...connector, ws });


    };


    /**
    * Send a message to the Carnelian process if a connection is open
    * @param event 
    * @param data 
    */
    send(event: ClientEvent, data?: any) {
        if (!this.ws) {
            return;
        }
        this.ws.send(JSON.stringify({
            event,
            data
        }))
        const dataString = data || "{empty}"
        console.log(`SK >>> [${event.toUpperCase()}] :: ${dataString}`);
    };
}