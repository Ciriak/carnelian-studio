import { atom, AtomOptions } from 'recoil';
import ConnectorManager from '../ConnectorManager';

interface IConnectorState {
  manager: ConnectorManager;
  connected: boolean;
}

const connectorState = atom({
  key: 'connectorState', // unique ID (with respect to other atoms/selectors)
  default: {
    connected: false,
    manager: new ConnectorManager(),
  },
} as AtomOptions<IConnectorState>);

export default connectorState;
