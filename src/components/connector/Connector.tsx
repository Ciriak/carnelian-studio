import { useEffect, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import connectorState from '../../atoms/connector';
import Carnelian from 'carnelian';
import { ClientEvent } from 'carnelian/types/enums/clientEvent.enums';
import { parseMessage } from '../../utils/socket.utils';
import ISocketData from 'carnelian/types/interfaces/socketData.interface';
import ConnectorManager from '../../ConnectorManager';
import configState from '../../atoms/config';

const Connector = () => {
  const [connector, setConnector] = useRecoilState(connectorState);
  const [config, setConfig] = useRecoilState(configState);
  const [manager] = useState(new ConnectorManager());
  useEffect(() => {

    console.log("new manager")
    manager.ws.onopen = (e) => {
      setConnector({ ...connector, connected: true });
      manager.send(Carnelian.Enums.ClientEvent.ClientEvent.REQUEST_CONFIG);
    }

    // Retry in 10 if failed to connect
    manager.ws.onerror = () => {
      console.warn("Failed to connect => Retrying in 10 seconds...");
      // setConnector({ connected: false });
      // setTimeout(() => {
      //     this.attemptConnection();
      // }, 10000)
      setConnector({ ...connector, connected: false });
    }



    manager.ws.onmessage = (message) => {
      const data = parseMessage(message);
      if (data) {
        handleSocketData(data);
      }
    }


    function handleSocketData(socket: ISocketData) {
      switch (socket.event) {
        case Carnelian.Enums.ServerEvent.ServerEvent.SEND_CONFIG:

          setConfig(socket.data);

          break;
        // case Carnelian.Enums.ServerEvent.ServerEvent.SEND_SCRIPT:

        //   setConfig(socket.data);

        //   break;

        default:
          debugger
          console.warn("Unhandled event received : " + socket.event)
          break;
      }
    }

  }, [connector, manager, setConfig, setConnector])

  return null;
}



export default Connector;
