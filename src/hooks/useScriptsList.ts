import { useRecoilState } from 'recoil';
import scriptsListState from '../atoms/scriptsList';
import IScript from 'carnelian/types/interfaces/script.interface';

import { findIndex } from 'lodash';
export function useScriptsList() {
  const [rcScriptsList, setScriptsList] = useRecoilState(scriptsListState);

  const scriptsList = rcScriptsList.scripts;

  /**
   * Add a script to the list or update it
   * @param script
   */
  const setScript = (script: IScript) => {
    const snap = { ...rcScriptsList };

    const index = findIndex(snap.scripts, { id: script.id });
    if (~index) {
      snap.scripts.splice(index, 1, script); // replace
    } else {
      snap.scripts.push(script);
    }

    setScriptsList({ ...snap });
  };
  return { scriptsList, setScript };
}
export default useScriptsList;
