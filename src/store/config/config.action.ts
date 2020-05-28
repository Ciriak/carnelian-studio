import { IConfig } from "carnelian/types/interfaces/config.interface"
import { SET_CONFIG, configActionTypes } from "./config.types"


/**
 * Update the app config
 * @param config 
 */
export function setConfig(config: IConfig): configActionTypes {
    return {
        type: SET_CONFIG,
        payload: {
            config
        }
    }
}