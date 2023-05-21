import Alarm from "./Alarm"

const Alarms = (props) => {

    const {alarms} = props

    return (
        <div className="alarms">
            {alarms?.map(alarm => 
                <Alarm key={alarm.id} alarm={alarm} />
            )}
        </div>
    )
}

export default Alarms;