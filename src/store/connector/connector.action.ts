import { SET_CONNECTED, connectorActionTypes, SET_DISCONNECTED } from "./connector.types"


/**
 * Update the app config
 * @param config 
 */
export function setConnected(): connectorActionTypes {
    return {
        type: SET_CONNECTED,
        payload: {
            connected: true
        }
    }
}

export function setDisconnected(): connectorActionTypes {
    return {
        type: SET_DISCONNECTED,
        payload: {
            connected: false
        }
    }
}