import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';

import { menuItems } from '../../menu';
import logo from '../../assets/logo-white.png';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt="logo" />
      </div>

      <ul className='app__navbar-links'>
        {menuItems.map((item) => (
          <li className='app__flex p-text' key={`navbar-links-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <RxHamburgerMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [250, 0] }}
            transition={{
              duration: 0.85,
              ease: 'easeOut'
            }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {menuItems.map((item) => (
                <li key={`navbar-menu-${item}`} onClick={() => setToggle(false)}>
                  <a href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
