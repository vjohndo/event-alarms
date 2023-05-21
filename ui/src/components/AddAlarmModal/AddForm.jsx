import { useState } from "react";

const AddForm = ({ addAlarm }) => {
    let currentTime = new Date().getTime();
    const [newAlarm, setNewAlarm] = useState({
        id: "",
        type: "",
        datetime: currentTime,
        status: "",
        roomId: "",
        residentId: ""
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === "datetime") {
            console.log(value);
            const timestamp = new Date(value).getTime() / 1000;
            setNewAlarm((prev) => {
                return { ...prev, datetime: timestamp }
            })
        } else {
            setNewAlarm((prev) => {
                return { ...prev, [name]: value }
            })
        }
    }

    const convertToISO = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
        const formattedString = isoDateTime.substring(0, isoDateTime.length - 1);
        console.log(formattedString);
        return formattedString
    }

    const handleSubmit = (event) => {
        let currentTime = new Date().getTime();
        setNewAlarm((prev) => {
            let date = new Date(prev.datetime);
            let timestamp = date.getTime();
            console.log(timestamp)
            return { ...prev, datetime: timestamp }
        })
        addAlarm(newAlarm);
        setNewAlarm({
            id: "",
            type: "",
            datetime: currentTime,
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
                placeholder="Alarm Type"
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
                placeholder="Alarm Status"
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