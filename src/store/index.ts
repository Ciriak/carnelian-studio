
import { combineReducers, createStore } from "redux"
import configReducer from "./config/config.reducer"
import { useStore } from "react-redux";
import { IConfig } from "carnelian/types/interfaces/config.interface";
import connectorReducer, { IConnectorState } from "./connector/connector.reducer";
import notificationsReducer, { INotificationsState } from "./notifications/notifications.reducer";

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

export const rootReducer = combineReducers({
    config: configReducer,
    connector: connectorReducer,
    notifications: notificationsReducer
})

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>