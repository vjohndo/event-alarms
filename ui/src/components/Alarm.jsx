const Alarm = (props) => {
    
    const {alarm} = props

    return (
    <div className="alarm">
        <h3>Type: {alarm.type}</h3>
        <p>Time: {new Date(alarm.datetime * 1000).toLocaleTimeString()} </p>
        <p>Date: {new Date(alarm.datetime * 1000).toLocaleDateString()}</p>
        <p>Room ID: {alarm.roomId}</p>
        <p>residentId ID: {alarm.residentId}</p>
        <h3>Status: {alarm.status}</h3>
    </div>
    )
    
}

export default Alarm;