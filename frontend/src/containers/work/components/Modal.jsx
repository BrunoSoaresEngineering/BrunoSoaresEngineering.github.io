/* eslint-disable react/prop-types */
import ModalBase from '../../../components/modal/Modal.jsx';

function Modal({
  isModalOpen,
  closeModal,
  title,
  imageSrc,
  projectLink,
  codeLink,
  description,
  usedSkills
}) {
  return (
    <>
      <ModalBase isModelOpen={isModalOpen} closeModal={closeModal} >
        <h2></h2>
      </ModalBase>
    </>
  );
}
export default Modal;
