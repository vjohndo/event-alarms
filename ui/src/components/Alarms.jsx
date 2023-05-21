import Alarm from "./Alarm"

const Alarms = (props) => {

    const {alarms, time} = props

    return (
        <div className="alarms">
            {alarms?.map(alarm => 
                <Alarm key={alarm.id} alarm={alarm} time={time}/>
            )}
        </div>
    )
}

export default Alarms;