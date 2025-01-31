import { useState, useContext } from 'react';
import { subscriptionContext } from '../context/context';

import AddOnCard from '../components/AddOnCard';
import StepHeader from '../components/StepHeader';
import Button from '../components/Button';

const addOns = [
  {
    name: 'Online Service',
    description: 'Access to multiplyer games',
    price: {
      monthly: '$1/mo',
      yearly: '$10/yr',
    },
  },
  {
    name: 'Large Storage',
    description: 'Extra 1TB of cloud save',
    price: {
      monthly: '$2/mo',
      yearly: '$20/yr',
    },
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: '$2/mo',
      yearly: '$20/yr',
    },
  },
];

const StepThree = () => {
  const { isYearly, updateSubscriptionData, handleBackStep, handleNextStep } =
    useContext(subscriptionContext);
  const [addOnsClicked, setAddOnsClicked] = useState([]);

  const handleAddOnsClicked = (index, addOn, isYearly) => {
    if (isYearly) {
      setAddOnsClicked((prevAddOns) => [
        ...prevAddOns,
        { index, name: addOn.name, payment: addOn.price.yearly },
      ]);
    } else {
      setAddOnsClicked((prevAddOns) => [
        ...prevAddOns,
        { index, name: addOn.name, payment: addOn.price.monthly },
      ]);
    }
  };

  const handleNext = () => {
    updateSubscriptionData({ addOns: addOnsClicked });
    handleNextStep('/step-4');
  };

  const handleBack = () => {
    handleBackStep('/step-2');
  };
  return (
    <div className="step__container">
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <div className="step__container--add">
        {addOns.map((addOn, index) => (
          <AddOnCard
            key={index}
            index={index}
            addOn={addOn}
            isYearly={isYearly}
            addOnsClicked={addOnsClicked}
            handleAddOnsClicked={handleAddOnsClicked}
          />
        ))}
      </div>

      <div className="step__container--buttons">
        <Button type="back" handleClick={handleBack}>
          Go Back
        </Button>
        <Button type="next" handleClick={handleNext}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
