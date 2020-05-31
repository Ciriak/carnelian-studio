import React from "react";
import ScriptsList from "../scripts-list/ScriptsList";

const Dashboard = () => {
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

            <ScriptsList scripts={[]} />
        </div>
    )
}

export default Dashboard;