import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../lib/client';
import CircleAnimation from '../../components/Circle-animation.jsx';

import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const fetchSkills = async () => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    const skillsData = await client.fetch(skillsQuery);
    skillsData.sort((a, b) => {
      if (a.level === b.level) {
        return a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0);
      }
      return b.level - a.level;
    });
    setSkills(skillsData);

    const experiencesData = await client.fetch(experiencesQuery);
    setExperiences(experiencesData);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              className='app__skills-item app__flex'
              key={`app__skills-${skill.name}`}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="app__skills-logo app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
                <motion.div
                  className="app__skills-circle"
                  whileInView={{ opacity: [0, 0.5] }}
                >
                  <CircleAnimation percentage={(skill.level / 5) * 100} />
                </motion.div>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

const SkillsWrapped = AppWrap(Skills, 'skills');

export default SkillsWrapped;
