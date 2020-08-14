import React from 'react';
import './footer.scss';

import { useRecoilState } from 'recoil';
import configState from '../../atoms/config';
import connectorState from '../../atoms/connector';

const Footer = () => {
  const [config] = useRecoilState(configState);
  const [connector] = useRecoilState(connectorState);

  return (
    <footer className="app-footer">
      Carnelian v{config.version} - Connected : {String(connector.connected)} on port {String(config.socketPort)}
    </footer>
  );
};

export default Footer;
