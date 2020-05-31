import React from "react";
import IScript from "carnelian/types/interfaces/script.interface";
import ScriptStatusIcon from "../script-status-icon/ScriptStatusIcon";
import "./scripts-list.scss";
export interface IScriptsListprops {
    scripts: IScript[]
}
const ScriptsList = (props: IScriptsListprops) => {
    const renderScriptsList = (
        <table className="table">
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
                {props.scripts.map((script, scriptIndex) => {
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

    const renderNoItem = (
        <div className="no-items">
            <span>No item to show</span>
        </div>
    )

    return (
        <div className="scripts-list">
            {(props.scripts && props.scripts.length > 0) && (renderScriptsList)}
            {(!props.scripts || props.scripts.length === 0) && (renderNoItem)}
        </div>
    )


}

export default ScriptsList;