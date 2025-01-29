import { useState } from 'react';

import Button from '../components/Button';
import StepHeader from '../components/StepHeader';
import ArcadeIcon from '../assets/images/icon-arcade.svg';
import AdvancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';
import PlanCard from '../components/PlanCard';

const plans = [
  {
    icon: ArcadeIcon,
    name: 'Arcade',
    planPayment: {
      monthly: '$9/mo',
      yearly: '$90/year',
    },
  },
  {
    icon: AdvancedIcon,
    name: 'Advanced',
    planPayment: {
      monthly: '$12/mo',
      yearly: '$120/year',
    },
  },
  {
    icon: ProIcon,
    name: 'Pro',
    planPayment: {
      monthly: '$15/mo',
      yearly: '$150/year',
    },
  },
];

const StepTwo = () => {
  const [yearlyPlan, setYearlyPlan] = useState(true);
  const [cardClicked, setCardClicked] = useState({});

  const handleCardClicked = (index) => {
    setCardClicked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="step__container">
      <div>
        <StepHeader
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
        <div className="step__container--plans">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              yearlyPlan={yearlyPlan}
              index={index}
              cardClicked={cardClicked}
              handleCardClicked={handleCardClicked}
            />
          ))}
        </div>

        <div className="step__container--toggle_container">
          <span style={!yearlyPlan ? { color: 'var(--marine-blue)' } : null}>
            Monthly
          </span>

          <div className="step__container--toggle_container-slider">
            <input
              id="check"
              type="checkbox"
              onChange={() => setYearlyPlan(!yearlyPlan)}
              checked={yearlyPlan}
            />

            <label htmlFor="check"></label>
          </div>

          <span style={yearlyPlan ? { color: 'var(--marine-blue)' } : null}>
            Yearly
          </span>
        </div>
      </div>

      <div className="step__container--buttons">
        <Button type="back">Go Back</Button>
        <Button type="next">Next Step</Button>
      </div>
    </div>
  );
};

export default StepTwo;
