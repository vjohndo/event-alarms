import Portal from './Portal';

const Header = ({time, addAlarm}) => {
    return (
    <header className="App-header">
        <div className="sub-header">
            <h1>Event Alarms</h1>
            <Portal addAlarm={addAlarm}/>
        </div>
        <div>
            <h2>{time.toLocaleDateString()} | Current time: {time.toLocaleTimeString()}</h2>
        </div>
    </header>
    )
}

export default Header;