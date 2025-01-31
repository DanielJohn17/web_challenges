import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import './components_style.css';

const MenuCard = ({ menu }) => {
  const location = useLocation();

  return (
    <div className="menu__card">
      <div
        className={`
        ${
          location.pathname === '/' && menu.number === 1
            ? `menu__card--num_active`
            : location.pathname === '/step-4' && menu.number === 5
            ? `menu__card--num_active`
            : location.pathname === `/step-${menu.number}`
            ? `menu__card--num_active`
            : ''
        }
        menu__card--num`}
      >
        {menu.number}
      </div>

      <div className="menu__card--content">
        <h1>{menu.title}</h1>

        <h1>{menu.description}</h1>
      </div>
    </div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  menu: PropTypes.object.isRequired,
};
