import { useContext } from 'react';
import { subscriptionContext } from '../context/context';

import FinalChoiceCard from '../components/FinalChoiceCard';
import StepHeader from '../components/StepHeader';
import Button from '../components/Button';

const StepFour = () => {
  const { updateSubscriptionData, handleBackStep, handleNextStep } =
    useContext(subscriptionContext);

  const handleNext = () => {
    handleNextStep('/step-5');
  };

  const handleBack = () => {
    updateSubscriptionData({ addOns: null });
    handleBackStep('/step-3');
  };

  return (
    <div className="step__container">
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <FinalChoiceCard />

      <div className="step__container--buttons ">
        <Button type="back" handleClick={handleBack}>
          Go Back
        </Button>
        <Button type="next" handleClick={handleNext}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
