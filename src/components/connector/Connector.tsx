import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import connectorState from '../../atoms/connector';

const Connector = () => {
  const setConnectorState = useSetRecoilState(connectorState);

  useEffect(() => {
    setTimeout(() => {
      // Specify how to cleanup after this effect
      console.log('totot');
      setConnectorState({
        connected: true,
      });
    }, 1500);
  }, [setConnectorState]);

  return null;
};

export default Connector;
