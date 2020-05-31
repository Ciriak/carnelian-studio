
import { combineReducers } from "redux"
import configReducer from "./config/config.reducer"
import { useStore } from "react-redux";
import { IConfig } from "carnelian/types/interfaces/config.interface";
import 'bootstrap/dist/css/bootstrap.min.css';
import connectorReducer, { IConnectorState } from "./connector/connector.reducer";
import notificationsReducer, { INotificationsState } from "./notifications/notifications.reducer";
export const rootReducer = combineReducers({
    config: configReducer,
    connector: connectorReducer,
    notifications: notificationsReducer
})

export const useCnlStore = () => {
    return useStore<{
        config: IConfig,
        connector: IConnectorState,
        notifications: INotificationsState
    }>();
}

export type RootState = ReturnType<typeof rootReducer>