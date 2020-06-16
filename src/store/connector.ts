import Vue from "vue";


export interface ConnectorState {
    connected: boolean,
};

const state = Vue.observable<ConnectorState>({
    connected: false
});

const dispatch = {
    setConnected(connected: boolean) {
        state.connected = connected
    },
};


const connectorStore = {
    state,
    dispatch
};

export default connectorStore;