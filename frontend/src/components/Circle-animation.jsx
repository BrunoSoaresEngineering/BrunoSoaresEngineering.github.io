import { motion } from 'framer-motion';

const CircleAnimation = ({ percentage }) => {
  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const dashArray = (percentage / 100) * circumference;

  return (
    <svg viewBox="0 0 105 105">
      <motion.circle
        cx="50%"
        cy="50%"
        r={radius}
        fill="transparent"
        stroke="#057fcc"
        strokeWidth="7"
        strokeDasharray={`${dashArray} ${circumference}`}
        initial={{ strokeDasharray: `0 ${circumference}` }}
        whileInView={{ strokeDasharray: `${dashArray} ${circumference}` }}
        transition={{ duration: 2 }}
      />
    </svg>
  );
};

export default CircleAnimation;
