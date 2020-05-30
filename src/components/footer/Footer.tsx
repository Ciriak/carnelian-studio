import React from "react";
import "./footer.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";


const Footer = () => {
    const selectConfig = (state: RootState) => state.config;
    const selectConnector = (state: RootState) => state.connector;
    const config = useSelector(selectConfig);
    const connector = useSelector(selectConnector);

    return (
        <footer className="app-footer">
            Carnelian v{config.version} - Connected : {String(connector.connected)}

        </footer>
    )
}

export default Footer;