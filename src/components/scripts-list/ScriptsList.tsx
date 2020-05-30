import React from "react";
import IScript from "carnelian/types/interfaces/script.interface";
import Carnelian from "carnelian";
import ScriptStatusIcon from "../script-status-icon/ScriptStatusIcon";
const script = Carnelian.Utils.Script.defaultScript();
const scripts: IScript[] = [{
    ...script
}];
const ScriptsList = () => {
    return (
        <table className="table scripts-list">
            <thead>
                <tr>
                    <th scope="col"> # </th>
                    <th scope="col">Script</th>
                    <th scope="col">Version</th>
                    <th scope="col">Last edit date</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {scripts.map((script, scriptIndex) => {
                    return (<tr key={scriptIndex}>
                        <th scope="row"><ScriptStatusIcon script={script} /> </th>
                        <td>{script.metadata.name}</td>
                        <td>{script.metadata.version}</td>
                        <td>{String(script.editDate)}</td>
                        <td>
                            <span>Remove</span>
                        </td>
                    </tr>)
                })}


            </tbody>
        </table>
    )
}

export default ScriptsList;