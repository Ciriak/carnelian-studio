import { atom } from 'recoil';

import Carnelian from 'carnelian';

const configState = atom({
  key: 'configState',
  default: Carnelian.Utils.Config.defaultConfig,
});

export default configState;
