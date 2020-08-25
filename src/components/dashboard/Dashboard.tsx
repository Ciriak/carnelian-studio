import React from 'react';
import ScriptsList from '../scripts-list/ScriptsList';
import { useRecoilState } from 'recoil';
import scriptsListState from '../../atoms/scriptsList';
import useScriptsList from '../../hooks/useScriptsList';

const Dashboard = () => {
  const { scriptsList } = useScriptsList();
  return (
    <div className="dashboard">
      <div className="row align-items-center">
        <div className="col">
          <h1>Dashboard</h1>
        </div>
        <div className="col text-right">
          <div className="btn btn-primary">New</div>
        </div>
      </div>

      <ScriptsList scripts={scriptsList} />
    </div>
  );
};

export default Dashboard;
