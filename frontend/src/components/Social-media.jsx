import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin, BiSolidDownload } from 'react-icons/bi';

import { client, urlForFile } from '../lib/client';

const SocialMedia = () => {
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
    <div className="app__social">
      <a href={cvFileURL}>
        <div>
          <BiSolidDownload />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/bruno-soares-engineering/" target='_blank'>
        <div>
          <BiLogoLinkedin />
        </div>
      </a>
      <a href="https://github.com/BrunoSoaresEngineering/" target='_blank'>
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
