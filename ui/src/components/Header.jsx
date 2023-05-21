import Portal from './AddAlarmModal/Portal';

const Header = ({ time, addAlarm }) => {
  return (
    <header className="App-header">
      <div className="sub-header">
        <h1>Event Alarms</h1>
        <Portal addAlarm={addAlarm} />
      </div>
      <div>
        <h2>Current time: {time.toLocaleTimeString()} | {time.toLocaleDateString()}</h2>
      </div>
    </header>
  )
};

export default Header;
