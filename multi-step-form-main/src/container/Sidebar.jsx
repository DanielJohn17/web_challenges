import MenuCard from '../components/MenuCard';
import './containers_style.css';

const menus = [
  {
    number: 1,
    title: 'Step 1',
    description: 'Your Info',
  },
  {
    number: 2,
    title: 'Step 2',
    description: 'Select Plan',
  },
  {
    number: 3,
    title: 'Step 3',
    description: 'Add-ons',
  },
  {
    number: 4,
    title: 'Step 4',
    description: 'Summary',
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {menus.map((menu) => (
        <MenuCard key={menu.number} menu={menu} />
      ))}
    </div>
  );
};

export default Sidebar;
