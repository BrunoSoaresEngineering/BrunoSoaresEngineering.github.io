import { motion } from 'framer-motion';

import images from '../../constants/images';
import { AppWrap } from '../../wrapper';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

const mainTechnologiesImages = [
  images.node,
  images.typescript,
  images.react
];

const Header = () => (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className="badge-cmp">
            <p className="p-text">Hello, my name is</p>
            <h1 className='head-text'>Bruno Soares</h1>
          </div>

          <div className="tag-cmp">
            <p className="p-text">Full-stack Software Engineer</p>
            <p className="p-text">Cloud Administrator</p>
            <p className="p-text">Power Systems Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile photo" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='overlay circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {mainTechnologiesImages.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="Main technology circle" />
          </div>
        ))}
      </motion.div>
    </div>
);

const HeaderWrapped = AppWrap(Header, 'home', 'app__primarybg');

export default HeaderWrapped;
