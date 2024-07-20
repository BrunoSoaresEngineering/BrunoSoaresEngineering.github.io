import { useEffect, useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { MdCloudDownload } from 'react-icons/md';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlForFile } from '../../lib/client';

import './Footer.scss';

const Footer = () => {
  const [cvFileURL, setCvFileURL] = useState(undefined);

  const fetchCv = async () => {
    const cvQuery = '*[_type == "cv"][0]';

    const { file } = await client.fetch(cvQuery);
    setCvFileURL(urlForFile(file));
  };

  useEffect(() => {
    fetchCv();
  }, []);

  return (
    <>
      <h2 className="head-text">Take a coffe and <span>chat</span> with me!</h2>
      <div className="app__footer-cards">
        <a href='mailto:brunommsoares@outlook.com' className="app__footer-card bold-text">
          <div className='app__footer-icons'>
            <SiMinutemailer />
          </div>
          <p className="bold-text">
            brunommsoares@outlook.com
          </p>
        </a>
        <a href={`${cvFileURL}`} className="app__footer-card bold-text">
          <div className='app__footer-icons'>
            <MdCloudDownload />
          </div>
          <p className="bold-text">
            Download CV
          </p>
        </a>
      </div>
    </>
  )
};

const FooterWrapped = AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');

export default FooterWrapped;
