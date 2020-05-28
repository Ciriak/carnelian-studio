
import {
    SET_CONFIG
} from './config.types'

import { configActionTypes } from "./config.types";
import Carnelian from "carnelian";
import { IConfig } from 'carnelian/types/interfaces/config.interface';


const initialState: IConfig = {
    ...Carnelian.Utils.Config.defaultConfig
};

export default function configReducer(
    state = initialState,
    action: configActionTypes
) {
    switch (action.type) {
        case SET_CONFIG:

            return {
                ...state,
                ...action.payload.config
            }
        default:
            return state
    }
}