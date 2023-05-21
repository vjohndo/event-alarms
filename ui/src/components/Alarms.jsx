import Alarm from "./Alarm"

const Alarms = ({alarms, time}) => {
    return (
        <div className="alarms">
            {alarms?.map(alarm => 
                <Alarm key={alarm.id} alarm={alarm} time={time}/>
            )}
        </div>
    )
}

export default Alarms;