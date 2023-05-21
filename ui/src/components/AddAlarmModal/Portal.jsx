import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalAddForm from './ModalAddForm';


const Portal = ({ addAlarm }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="add-alarm-button" onClick={() => setShowModal(true)}>
        Add Alarm +
      </button>
      {showModal && createPortal(
        <ModalAddForm addAlarm={addAlarm} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}

export default Portal