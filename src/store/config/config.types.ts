import Carnelian from "carnelian";
/**
 * The the current config
 */
export const SET_CONFIG = 'SET_CONFIG'

interface SetConfigAction {
    type: typeof SET_CONFIG
    payload: {
        config: Carnelian.Interfaces.Config.IConfig
    }
}
export type configActionTypes = SetConfigAction;