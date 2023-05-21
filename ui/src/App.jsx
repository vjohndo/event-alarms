import { useState, useEffect } from 'react';
import './App.css';
import alarmMocks from './mock-data/alarmMocks';
import Alarms from './components/Alarms';
import Portal from './components/Portal';

function App() {
  const [uniqueId, setUniqueId] = useState(10);
  const [alarms, setAlarms] = useState([...alarmMocks]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addAlarm = (newAlarm) => {
    setAlarms(prevAlarms => {
      return [...prevAlarms, {...newAlarm, id: uniqueId}]
    })
    setUniqueId(prev => prev + 1)
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <p>The current time is: {time.toLocaleTimeString()}</p>
      <div className="App-body">
        <div><Portal addAlarm={addAlarm}/></div>
        <Alarms alarms={alarms} time={time}/>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
