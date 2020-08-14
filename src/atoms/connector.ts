import { atom } from 'recoil';

const connectorState = atom({
  key: 'connectorState', // unique ID (with respect to other atoms/selectors)
  default: {
    connected: false,
  },
});

export default connectorState;
