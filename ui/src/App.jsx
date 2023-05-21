import { useState, useEffect } from 'react';
import './App.css';
import alarmMocks from './mock-data/alarmMocks';
import Header from './components/Header';
import Alarms from './components/Alarms';
import Footer from './components/Footer';


function App() {
  const [uniqueId, setUniqueId] = useState(10);
  const [alarms, setAlarms] = useState([...alarmMocks.toSorted( (a, b) => a.datetime - b.datetime)]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    alarmMocks.sort()

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addAlarm = (newAlarm) => {
    setAlarms(prevAlarms => {
      return [...prevAlarms, {...newAlarm, id: uniqueId}].toSorted( (a, b) => a.datetime - b.datetime);
    })
    setUniqueId(prev => prev + 1)
  };

  return (
    <div className="App">
      <Header time={time} addAlarm={addAlarm}/>
      <Alarms alarms={alarms} time={time}/>
      <Footer />
    </div>
  );
}

export default App;
