import React, { useContext } from 'react';
import './app.scss';
import { ConfigContext, useConfig } from "./context/config.context";
function App() {

  const config = useConfig();

  return (
    <ConfigContext.Provider value={config}>
      <div className="carnelian-studio">
        <Header></Header>
        <Comp2></Comp2>
      </div>
    </ConfigContext.Provider>


  );

}

const Header = ({ url }: any): JSX.Element => {
  const { config, setConfig } = useContext(ConfigContext);
  return (
    <div onClick={() => { setConfig({ ...config, apiUrl: "toto" }) }}>
      {config.apiUrl}
    </div>
  )
}

function Comp2() {
  const { config, setConfig } = useContext(ConfigContext);
  return (
    <div onClick={() => {
      setConfig({ ...config, apiUrl: "ddd" })
    }}>
      {config.apiUrl}
    </div>
  )
}

export default App;
