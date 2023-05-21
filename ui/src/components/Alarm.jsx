const Alarm = (props) => {
    
    const {alarm, time} = props

    const calculateTimeDiff = (time1, time2) => {
        const padAbs = (num) => Math.abs(num).toString().padStart(2,"0");

        let divideFunction = Math.floor;

        if (time1 < time2) {
            divideFunction = Math.ceil;
        }

        let msec = time1 - time2;
        let dd = divideFunction(msec / 1000 / 60 / 60 / 24);
        msec -= dd * 1000 * 60 * 60 * 24;
        let hh = divideFunction(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        const mm = divideFunction(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        const ss = divideFunction(msec / 1000);
        msec -= ss * 1000;

        let prefix = "- ";
        if (time1 < time2) {
            prefix = "+ ";
        }

        let days = " ";
        if (dd !== 0) {
            days = `${padAbs(dd)} days, `;
        }

        return (`${prefix}${days}${padAbs(hh)}:${padAbs(mm)}:${padAbs(ss)}`)       
    }

    return (
    <div className="alarm">
        <h3>Type: {alarm.type}</h3>
        <p>Time: {new Date(alarm.datetime * 1000).toLocaleTimeString()} </p>
        <p>Date: {new Date(alarm.datetime * 1000).toLocaleDateString()}</p>
        <p>Room ID: {alarm.roomId}</p>
        <p>ResidentId ID: {alarm.residentId}</p>
        <h3>Status: {alarm.status}</h3>
        <h3>T {calculateTimeDiff(alarm.datetime * 1000, time.getTime())}</h3>
    </div>
    )
    
}

export default Alarm;