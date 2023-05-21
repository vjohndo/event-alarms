import { useState } from 'react';
import './App.css';
import alarmMocks from './mock-data/alarmMocks';
import Alarms from './components/Alarms';
import PortalExample from './components/Portal';
import AddForm from './components/AddForm';

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
      <div className="App-body">
        <AddForm addAlarm={addAlarm} />
        <div><PortalExample /></div>
        <Alarms alarms={alarms}/>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
