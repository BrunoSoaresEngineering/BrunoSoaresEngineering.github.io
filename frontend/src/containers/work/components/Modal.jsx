/* eslint-disable react/prop-types */
import { PortableText } from '@portabletext/react';
import { Tooltip } from 'react-tooltip';
import ModalBase from '../../../components/modal/Modal.jsx';
import { urlFor } from '../../../lib/client';

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
          <div className="app__modal-skills">
            {workItem?.usedSkills.map((usedSkill) => (
              <div
                key={`used-skill-${usedSkill.name}`}
                className="app__modal-skill"
                style={{ backgroundColor: usedSkill.bgColor }}
                data-tooltip-id={usedSkill.name}
              >
                <img
                  src={urlFor(usedSkill.icon)}
                  alt={usedSkill.name}
                />
                <Tooltip id={usedSkill.name} className='app__modal-skill-tooltip'>
                  {usedSkill.name}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </ModalBase>
    </>
  );
}
export default Modal;
