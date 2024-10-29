/* eslint-disable react/prop-types */
import { PortableText } from '@portabletext/react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
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
            {(workItem?.projectLink || workItem?.codeLink) && (
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__modal-img-hover"
              >
                {workItem?.projectLink && (
                  <a href={workItem?.projectLink} target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {workItem?.codeLink && (
                  <a href={workItem?.codeLink} target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            )}
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
