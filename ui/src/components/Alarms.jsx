import Alarm from "./Alarm"

const Alarms = ({alarms, time, removeAlarm}) => {
    return (
        <div className="alarms">
            {alarms?.map(alarm => 
                <Alarm key={alarm.id} id={alarm.id} alarm={alarm} time={time} removeAlarm={removeAlarm}/>
            )}
        </div>
    )
}

export default Alarms;