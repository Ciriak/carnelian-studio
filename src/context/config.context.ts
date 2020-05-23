import React from 'react';
import Carnelian from "carnelian";
import { IConfig } from 'carnelian/types/interfaces/config.interface';

interface ConfigContext {
    config: Carnelian.Interfaces.Config.IConfig;
    setConfig: (config: Carnelian.Interfaces.Config.IConfig) => void;
}

export const defaultState = {
    config: Carnelian.Utils.Config.defaultConfig,
    setConfig: () => { },
};

export const ConfigContext = React.createContext<ConfigContext>(defaultState);

export const useConfig = (): ConfigContext => {
    const [config, setConfigR] = React.useState(Carnelian.Utils.Config.defaultConfig);

    // setTimeout(() => {
    //     setConfig({ ...config, apiUrl: "dzegfsrsgr" })
    // }, 1500)

    const setConfig = React.useCallback((newConfig: IConfig): void => {
        setConfigR({ ...config, ...newConfig })
    }, [config]);

    return {
        config,
        setConfig,
    };
};