import Vue from "vue";
import { IConfig } from 'carnelian/types/interfaces/config.interface';
import Carnelian from "carnelian";



let state = Vue.observable<IConfig>(Carnelian.Utils.Config.defaultConfig);

const dispatch = {
    setConfig(newConfig: any) {
        state = { ...newConfig };
    },
};


const connectorStore = {
    state,
    dispatch
};

export default connectorStore;