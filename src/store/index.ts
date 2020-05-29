
import { combineReducers } from "redux"
import configReducer from "./config/config.reducer"
import { useStore } from "react-redux";
import { IConfig } from "carnelian/types/interfaces/config.interface";
import 'bootstrap/dist/css/bootstrap.min.css';
export const rootReducer = combineReducers({
    config: configReducer,
})

export const useCnlStore = () => {
    return useStore<{
        config: IConfig
    }>();
}

export type RootState = ReturnType<typeof rootReducer>