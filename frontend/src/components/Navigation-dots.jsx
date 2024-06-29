import { menuItems } from '../menu';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {menuItems.map((item, index) => (
        <a 
          href={`#${item}`}
          key={`navigation_${item}_${index}`}
          className={`app__navigation-dot ${active === item ? 'active' : '' }`}
        />
      ))}
    </div>
  )
};

export default NavigationDots;
