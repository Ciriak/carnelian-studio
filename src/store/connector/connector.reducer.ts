
import {
    SET_CONNECTED,
    SET_DISCONNECTED
} from './connector.types'

import { connectorActionTypes } from "./connector.types";

export interface IConnectorState {
    connected: boolean;
}
const initialState: IConnectorState = {
    connected: false
};

export default function connectorReducer(
    state = initialState,
    action: connectorActionTypes
) {
    switch (action.type) {
        case SET_CONNECTED:
            return {
                ...state,
                ...action.payload
            }
        case SET_DISCONNECTED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}