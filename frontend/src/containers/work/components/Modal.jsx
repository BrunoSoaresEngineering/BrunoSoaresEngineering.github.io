/* eslint-disable react/prop-types */
import {PortableText} from '@portabletext/react';
import ModalBase from '../../../components/modal/Modal.jsx';
import { urlFor } from '../../../lib/client.js';

import './Modal.scss';

function Modal({
  isModalOpen,
  closeModal,
  workItem
}) {
  return (
    <>
      <ModalBase isModelOpen={isModalOpen} closeModal={closeModal} >
        <div className="app__modal">
          <div className="app__modal-img app__flex">
            <img src={urlFor(workItem?.imgUrl)} alt={workItem?.name} />
            <p className="p-text">{workItem?.tags[0]}</p>
          </div>
          <h4 className="bold-text">{workItem?.title}</h4>
          <div className="p-text app__modal-description">
            <PortableText
              value={workItem?.detailedDescription}
            />
          </div>
        </div>
      </ModalBase>
    </>
  );
}
export default Modal;
