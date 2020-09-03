import React from 'react';
import IScript from 'carnelian/types/interfaces/script.interface';
import ScriptButton from '../script-button/ScriptButton';
import './scripts-list.scss';
import Icon from '@mdi/react';
import { mdiPlay, mdiDelete, mdiFileEdit, mdiToolbox, mdiTools, mdiContentCopy } from '@mdi/js';
import { Button, Dropdown, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import connectorState from '../../atoms/connector';
import Carnelian from 'carnelian';

export interface IScriptsListprops {
  scripts: IScript[];
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
          return (
            <tr key={scriptIndex}>
              <th scope="row">
                <ScriptButton script={script} />{' '}
              </th>
              <td>{script.metadata.description || 'No details'}</td>
              <td>{script.metadata.version || '0.0.1'}</td>
              <td>{String(script.editDate)}</td>
              <td>
                <Row>
                  <OverlayTrigger overlay={<Tooltip id={`tooltip-edit-${script.id}`}>Edit</Tooltip>}>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleEditScript(script);
                      }}
                    >
                      <Icon size={1} path={mdiFileEdit} />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger overlay={<Tooltip id={`tooltip-tools-${script.id}`}>Options</Tooltip>}>
                    <Dropdown>
                      <Dropdown.Toggle variant="default">
                        <Icon size={1} path={mdiTools} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Icon size={0.7} path={mdiContentCopy} /> Duplicate
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Icon size={0.7} path={mdiDelete} /> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </OverlayTrigger>
                </Row>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  const renderNoItem = (
    <div className="no-items">
      <span>No item to show</span>
    </div>
  );

  const [connector] = useRecoilState(connectorState);
  const handleEditScript = (script: IScript) => {
    connector.manager.send(Carnelian.Enums.ClientEvent.ClientEvent.RUN_SCRIPT, script.id);
  };

  return (
    <div className="scripts-list">
      {props.scripts && props.scripts.length > 0 && renderScriptsList}
      {(!props.scripts || props.scripts.length === 0) && renderNoItem}
    </div>
  );
};

export default ScriptsList;
