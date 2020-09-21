import React from 'react';
import IScript from 'carnelian/types/interfaces/script.interface';
import './script-button.scss';
import Icon from '@mdi/react';
import { mdiPlay } from '@mdi/js';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import connectorState from '../../atoms/connector';
import Carnelian from 'carnelian';
export interface IScriptStatusIconProps {
  script: IScript;
}

const ScriptButton = (props: IScriptStatusIconProps) => {
  const script = props.script;
  const [connector] = useRecoilState(connectorState);

  const handleClick = () => {
    //ignore if script can't run
    if (!script.metadata.isValid) {
      return;
    }

    connector.manager.send(Carnelian.Enums.ClientEvent.ClientEvent.RUN_SCRIPT, script);
  };

  return (
    <>
      <OverlayTrigger
        trigger={['hover', 'focus']}
        key="bottom"
        show={!script.metadata.isValid}
        placement="bottom"
        overlay={
          <Popover placement="bottom" id="not-valid-reason-container">
            <Popover.Title as="h3">This script cannot run for the following reasons :</Popover.Title>
            {script.metadata.notValidReasons && (
              <Popover.Content>
                <ul>
                  {script.metadata.notValidReasons?.map((reason) => {
                    return <li>{reason.label + ' ' + JSON.stringify(reason.extraData)}</li>;
                  })}
                </ul>
              </Popover.Content>
            )}
          </Popover>
        }
      >
        <div
          className={`script-btn ${script.metadata.isValid ? 'valid' : 'not-valid'} ${script.processing ? 'processing' : ''} ${
            script.running ? 'running' : ''
          }`}
          onClick={handleClick}
        >
          <div className="btn-border"></div>
          <div className="status-icon">
            <Icon path={mdiPlay} size={1} />
          </div>
        </div>
      </OverlayTrigger>
    </>
  );
};

export default ScriptButton;
