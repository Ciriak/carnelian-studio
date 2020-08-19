import { atom, AtomOptions } from 'recoil';

interface IConnectorState {
  connected: boolean;
}

const connectorState = atom({
  key: 'connectorState', // unique ID (with respect to other atoms/selectors)
  default: {
    connected: false,
  },
} as AtomOptions<IConnectorState>);

export default connectorState;
