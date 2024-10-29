/* eslint-disable react/prop-types */
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import DisableScroll from './Disable-scroll.jsx';
import './Modal.scss';

function Modal({ children, isModelOpen, closeModal }) {
  if (!isModelOpen) {
    return <></>;
  }

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__modal-backdrop" onClick={closeModal}
    >
      {isModelOpen && <DisableScroll />}
      <div className="app__modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="app__modal-close-btn">
          <HiX onClick={closeModal} />
        </div>
        <div className="app__modal-container">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
export default Modal;
