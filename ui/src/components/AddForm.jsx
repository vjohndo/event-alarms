import { useState } from "react";

const AddForm = (props) => {
    
    const {addAlarm} = props

    let uniqueId = (function () {
        let num = 9;
        return function () {
            num += 1;
            return String(num);
        }
      }()
    );
    
    const [newAlarm, setNewAlarm] = useState({
        id: uniqueId(),
        type: "",
        datetime: 1684477511,
        status: "",
        roomId: "",
        residentId: ""
    })

    const handleChange = (event) => {
        const {value, name} = event.target;
        if (name === "datetime") {
            console.log(value);
            const timestamp = new Date(value).getTime() / 1000;
            setNewAlarm((prev) => {
                return {...prev, datetime: timestamp}
            })
        } else {
            setNewAlarm((prev) => {
                return {...prev, [name]: value}
            })
        }
    }

    const convertToISO = (timestamp) => {
        const date = new Date(timestamp*1000).toISOString();
        const formattedString = date.substring(0,date.length-1);
        return formattedString
    }
    
    const handleSubmit = (event) => {
        setNewAlarm((prev) => {
            let date = new Date(prev.datetime);
            let timestamp = date.getTime();
            console.log(timestamp)
            return {...prev, datetime: timestamp}
        })
        addAlarm(newAlarm);
        setNewAlarm({
          id: uniqueId(),
          type: "",
          datetime: 1684477511,
          status: "",
          roomId: "",
          residentId: ""
        })
        event.preventDefault();
    }

    return (
        <form className="alarm-form" onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            name="type"
            placeholder="Type"
            value={newAlarm.type}
            />
            <input
            onChange={handleChange}
            type="datetime-local"
            name="datetime"
            placeholder="datetime"
            value={convertToISO(newAlarm.datetime)}
            />
            <input
            onChange={handleChange}
            name="status"
            placeholder="status"
            value={newAlarm.status}
            />
            <input
            onChange={handleChange}
            name="roomId"
            placeholder="Room ID"
            value={newAlarm.roomId}
            />
            <input
            onChange={handleChange}
            name="residentId"
            placeholder="Resident ID"
            value={newAlarm.residentId}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddForm