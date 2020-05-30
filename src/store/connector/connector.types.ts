/**
 * The the current config
 */
export const SET_CONNECTED = 'SET_CONNECTED'
export const SET_DISCONNECTED = 'SET_DISCONNECTED'

interface SetConnectedAction {
    type: typeof SET_CONNECTED
    payload: {
        connected: boolean
    }
}

interface SetDisconnectedAction {
    type: typeof SET_DISCONNECTED
    payload: {
        connected: boolean
    }
}

export type connectorActionTypes = SetConnectedAction | SetDisconnectedAction;