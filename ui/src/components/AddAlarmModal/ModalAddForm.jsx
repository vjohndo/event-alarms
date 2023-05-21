import AddForm from "./AddForm";

const ModalContent = ({ addAlarm, onClose }) => {
  return (
    <div className="modal">
      <div>Add Alarm Event</div>
      <AddForm addAlarm={addAlarm} />
      <button className="close-modal-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalContent;
