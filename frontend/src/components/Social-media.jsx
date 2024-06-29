import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';

const SocialMedia = () => {
  return (
    <div className="app__social">
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
  )
}
export default SocialMedia;
