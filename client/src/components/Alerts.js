import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import {IoWarning} from 'react-icons/io5'
 export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div style={{width: '22rem', margin:'auto',fontSize:'22px'}} key={alert.id} className={`alert alert-${alert.type}`}>
        <IoWarning style={{fontSize:'49px'}}/> 
        {alert.msg}
      </div>
    ))
  );
};
export default Alerts;
