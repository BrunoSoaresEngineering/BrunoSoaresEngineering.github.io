/* eslint-disable react/prop-types */

import DisableScroll from './Disable-scroll.jsx';
import './Modal.scss';

function Modal({ children, isModelOpen, closeModal }) {
  if (!isModelOpen) {
    return <></>;
  }

  return (
    <div className="app__modal-backdrop" onClick={closeModal}>
      {isModelOpen && <DisableScroll />}
      <div className='app__modal-container' onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal}>
          &times;
        </button>
        {isModelOpen}
        {children}
      </div>
    </div>
  );
}
export default Modal;
