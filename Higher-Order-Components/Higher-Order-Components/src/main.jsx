import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import CallBack from './assets/Components/01 - CallBack/Practice/CallBack.jsx';
import ParentCallBack from './assets/Components/01 - CallBack/Practice/Parent.jsx';
import FunctionReturn from './assets/Components/02 - ReturningFunction/Practice/ReturningFunction.jsx';
import SetIntervals from './assets/Components/03 - SettingTime/setInterval.jsx';
import NumberList from './assets/Components/04 - forEach/Numbers.jsx';
import Numbers from './assets/Components/05 - Reduce/Number.jsx';
import Check from './assets/Components/06 - Every/Check.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/* CALL BACK FUNCTIONS */}
    <CallBack />
    <ParentCallBack />

    {/* FUNCTION RETURNS */}
    <FunctionReturn />

    {/* SET INTERVAL */}
    <SetIntervals />

    {/* NUMBERLIST */}
    <NumberList />

    {/* NUMBER - REDUCE CONCEPT */}
    <Numbers />

    {/* CHECK LIST */}
    <Check />
    



  </React.StrictMode>,
)
