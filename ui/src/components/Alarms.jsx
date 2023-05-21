import Alarm from "./Alarm"

const Alarms = ({alarms, time, removeAlarm, updateAlarm}) => {
    return (
        <div className="alarms">
            <h2>Active Alarms</h2>
            <div className="alarms-wrapper">
                {alarms?.map(alarm => {
                    if (alarm.status === "active") {
                        return <Alarm
                            key={alarm.id}
                            id={alarm.id}
                            alarm={alarm}
                            time={time}
                            removeAlarm={removeAlarm} 
                            updateAlarm={updateAlarm}
                        />
                    } else {
                        return <></>
                    }
                })}
            </div>

            <h2 className="inactive-status">Inactive Alarms</h2>
            <div className="alarms-wrapper">
            {alarms?.map(alarm => {
                    if (alarm.status !== "active") {
                        return <Alarm
                            key={alarm.id}
                            id={alarm.id}
                            alarm={alarm}
                            time={time}
                            removeAlarm={removeAlarm} 
                            updateAlarm={updateAlarm}
                        />
                    } else {
                        return <></>
                    }
                })}
            </div>
        </div>
        
        
    )
}

export default Alarms;