
import { combineReducers } from "redux"
import configReducer from "./config/config.reducer"
import { useStore } from "react-redux";
import { IConfig } from "carnelian/types/interfaces/config.interface";
import 'bootstrap/dist/css/bootstrap.min.css';
import connectorReducer, { IConnectorState } from "./connector/connector.reducer";
export const rootReducer = combineReducers({
    config: configReducer,
    connector: connectorReducer
})

export const useCnlStore = () => {
    return useStore<{
        config: IConfig,
        connector: IConnectorState
    }>();
}

export type RootState = ReturnType<typeof rootReducer>