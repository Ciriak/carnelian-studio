import Vue from "vue";
import IScript from 'carnelian/types/interfaces/script.interface';
import { findIndex } from "lodash";

export interface ScriptsState {
    scripts: IScript[],
};

const state = Vue.observable<ScriptsState>({
    scripts: []
});

const dispatch = {
    /**
     * Add or update a script based on it's id
     * @param script 
     */
    setScript(script: IScript) {
        const index = findIndex(state.scripts, { id: script.id });
        if (index === -1) {
            state.scripts.push(script);
        }
        else {
            state.scripts[index] = { ...script };
        }
    },
};


const connectorStore = {
    state,
    dispatch
};

export default connectorStore;