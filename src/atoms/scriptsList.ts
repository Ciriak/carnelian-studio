import { atom, AtomOptions } from 'recoil';

import IScript from 'carnelian/types/interfaces/script.interface';
export interface IScriptsListState {
  scripts: IScript[];
}

const scriptsListState = atom({
  key: 'scriptsList', // unique ID (with respect to other atoms/selectors)
  default: {
    scripts: [],
  },
} as AtomOptions<IScriptsListState>);

export default scriptsListState;
