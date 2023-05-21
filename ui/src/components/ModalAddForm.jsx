import AddForm from "./AddForm";

const ModalContent = ({ addAlarm, onClose }) => {
    return (
      <div className="modal">
        <div>I'm a modal dialog</div>
        <AddForm addAlarm={addAlarm}/>
        <button onClick={onClose}>Close</button>
      </div>
    );
}

export default ModalContent;