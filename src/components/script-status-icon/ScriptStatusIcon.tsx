import React from "react";
import IScript from "carnelian/types/interfaces/script.interface";

export interface IScriptStatusIconProps {
    script: IScript
}

const ScriptStatusIcon = (props: IScriptStatusIconProps) => {
    const script = props.script;
    if (script.running) {
        return <span>Running</span>;
    } else {
        return <span>Idle</span>;
    }
}

export default ScriptStatusIcon;