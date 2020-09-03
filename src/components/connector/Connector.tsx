import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import connectorState from '../../atoms/connector';
import Carnelian from 'carnelian';
import { parseMessage } from '../../utils/socket.utils';
import ISocketData from 'carnelian/types/interfaces/socketData.interface';
import configState from '../../atoms/config';

import { useScriptsList } from '../../hooks/useScriptsList';

const Connector = () => {
  const [connector, setConnector] = useRecoilState(connectorState);
  const [config, setConfig] = useRecoilState(configState);
  const { setScript } = useScriptsList();

  const handleSocketData = useCallback(
    (socket: ISocketData) => {
      switch (socket.event) {
        case Carnelian.Enums.ServerEvent.ServerEvent.SEND_CONFIG:
          setConfig(socket.data);
          connector.manager.send(Carnelian.Enums.ClientEvent.ClientEvent.REQUEST_SCRIPTS_LIST);

          break;
        case Carnelian.Enums.ServerEvent.ServerEvent.SEND_SCRIPT:
          setScript(socket.data);

          break;

        default:
          debugger;
          console.warn('Unhandled event received : ' + socket.event);
          break;
      }
    },
    [connector.manager, setConfig, setScript]
  );

  useEffect(() => {
    connector.manager.ws.onopen = (e) => {
      console.log('Connected to the main process');
      setConnector({ ...connector, connected: true });
      connector.manager.send(Carnelian.Enums.ClientEvent.ClientEvent.REQUEST_CONFIG);
    };

    // Retry in 10 if failed to connect
    connector.manager.ws.onerror = () => {
      // console.warn('Failed to connect => Retrying in 10 seconds...');
      setConnector({ ...connector, connected: false });
    };

    connector.manager.ws.onmessage = (message) => {
      const data = parseMessage(message);
      if (data) {
        handleSocketData(data);
      }
    };
  }, [connector, handleSocketData, setConnector]);

  return null;
};

export default Connector;
