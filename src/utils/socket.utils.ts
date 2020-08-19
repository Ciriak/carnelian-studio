import ISocketData from "carnelian/types/interfaces/socketData.interface";

export function parseMessage(message: MessageEvent): ISocketData | null {
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