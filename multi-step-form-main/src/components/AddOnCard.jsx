import PropType from 'prop-types';
import { useState } from 'react';

const AddOnCard = ({
  index,
  addOn,
  isYearly,
  addOnsClicked,
  handleAddOnsClicked,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className="addon__card"
      onClick={() => {
        handleAddOnsClicked(index, addOn, isYearly);
        setIsChecked((prev) => !prev);
      }}
      style={
        addOnsClicked.some((item) => item.index === index) && isChecked
          ? {
              borderColor: 'var(--purplish-blue)',
              backgroundColor: 'hsla(228, 100%, 84%, 0.05)',
            }
          : {}
      }
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />

      <div className="addon__card--content">
        <h3>{addOn.name}</h3>
        <p>{addOn.description}</p>
      </div>

      <div className="addon__card--price">
        {isYearly ? addOn.price.yearly : addOn.price.monthly}
      </div>
    </div>
  );
};

export default AddOnCard;

AddOnCard.propTypes = {
  index: PropType.number.isRequired,
  addOn: PropType.object.isRequired,
  isYearly: PropType.bool.isRequired,
  addOnsClicked: PropType.array.isRequired,
  handleAddOnsClicked: PropType.func.isRequired,
};
