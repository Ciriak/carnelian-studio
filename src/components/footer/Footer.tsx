import React from "react";
import "./footer.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";


const Footer = () => {
    const selectConfig = (state: RootState) => state.config;
    const config = useSelector(selectConfig);

    return (
        <footer className="app-footer">
            footer {config.version}

        </footer>
    )
}

export default Footer;