import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { useForm } from 'react-hook-form';
import { setConfig } from '../../store/config/config.action';
import { addNotification } from '../../store/notifications/notifications.action';
import { guid } from '../../utils';
import { useRecoilState } from 'recoil';
import configState from '../../atoms/config';

const Settings = () => {
  const [config, setConfig] = useRecoilState(configState);
  const [canSave, setCanSave] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setConfig({ ...config, ...data });
    // dispatch(
    //   addNotification({
    //     id: guid(),
    //     title: 'Settings saved',
    //     type: 'info',
    //   })
    // );
    setCanSave(false);
  };

  const handleChange = () => {
    setCanSave(true);
  };

  return (
    <div className="settings">
      <div className="m-2">
        <h3>Settings</h3>
        {/* <small className="form-text text-muted">Changes are automatically saved</small> */}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => {
          handleChange();
        }}
      >
        <div className="card m-4">
          <div className="card-body">
            <h4>General</h4>

            <hr />

            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" name="launchOnStartup" ref={register} type="checkbox" defaultChecked={config.launchOnStartup} />
                  <span>Launch on startup {String(config.launchOnStartup)}</span>
                </label>
              </div>
              <small className="form-text text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis.</small>
            </div>
          </div>
        </div>

        <div className="card m-4">
          <div className="card-body">
            <h4>Advanced</h4>

            <hr />

            <div className="form-group">
              <label>
                <span>Socket port</span>
                <input
                  type="number"
                  className="form-control"
                  name="socketPort"
                  ref={register({ required: true })}
                  min="1000"
                  max="99999"
                  placeholder="ex : 2319"
                  defaultValue={config.socketPort}
                />
              </label>
              <small className="form-text text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis.</small>
              {errors.socketPort && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 m-4">
            {!canSave && <input className="btn btn-primary" type="submit" value="Save" disabled />}
            {canSave && <input className="btn btn-primary" type="submit" value="Save" />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
