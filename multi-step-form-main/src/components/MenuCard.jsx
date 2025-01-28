import PropTypes from 'prop-types';

import './components_style.css';

const MenuCard = ({ menu }) => {
  return (
    <div className="menu__card">
      <div className="menu__card--num">{menu.number}</div>

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
