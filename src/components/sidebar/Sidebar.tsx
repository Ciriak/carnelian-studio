// import { useContext } from "react";
// import { ConfigContext } from "../../context/config.context";
import React from "react";
import "./sidebar.scss";
import { useDispatch, useSelector } from 'react-redux'
import { setConfig } from "../../store/config/config.action";
import { RootState } from "../../store";

const Sidebar = () => {

    const selectConfig = (state: RootState) => state.config;
    const config = useSelector(selectConfig);

    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <div className="header-logo">
                <span onClick={() => { dispatch(setConfig({ ...config, version: "toto" })) }}>CARNELIAN {config.version}</span>
            </div>

            <div className="sidebar-menu">
                <div className="menu-item">
                    DASHBOARD
                </div>
                <div className="menu-item">
                    Workshop
                </div>
                <div className="menu-item">
                    Account
                </div>
            </div>

            <div className="ad">
                <span>AD</span>
            </div>

        </div>

    )
}

export default Sidebar;