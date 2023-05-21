import { useState } from 'react';
import './App.css';
import alarmMocks from './mock-data/alarmMocks';
import Alarms from './components/Alarms';
import PortalExample from './components/Portal';

function App() {

  const [alarms, setAlarms] = useState([...alarmMocks]);

  const addAlarm = (newAlarm) => {
    setAlarms(prevAlarms => {
      return [...prevAlarms, newAlarm]
    })
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        


        <div><PortalExample /></div>
        <Alarms alarms={alarms}/>
      </body>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
