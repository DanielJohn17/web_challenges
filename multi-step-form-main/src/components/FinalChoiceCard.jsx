import { useContext } from 'react';
import { NavLink } from 'react-router';

import { subscriptionContext } from '../context/context';

const extractNumber = (str) => {
  const match = str.match(/(\d+)/);
  return match ? parseInt(match[0], 10) : 0;
};

const FinalChoiceCard = () => {
  const { plan, addOns, isYearly, updateSubscriptionData } =
    useContext(subscriptionContext);
  return (
    <div className="choice__card">
      <div className="choice__card--summery">
        <div className="choice__card--summery_sub">
          <span>
            <h3>
              {plan.name} &#40;{isYearly ? 'Yearly' : 'Monthly'}&#41;
            </h3>
            <NavLink
              to="/step-2"
              onClick={() => {
                updateSubscriptionData({
                  plan: null,
                  addOns: null,
                  isYearly: false,
                });
              }}
            >
              Change
            </NavLink>
          </span>

          <p>{plan.payment}</p>
        </div>

        <div className="line-break" />

        <div className="choice__card--summery_other">
          {addOns.map((addOn, index) => (
            <div key={index}>
              <p>{addOn.name}</p>
              <p>+{isYearly ? addOn.payment : addOn.payment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="choice__card--total">
        <p>Total &#40;{isYearly ? 'per year' : 'per month'}&#41;</p>
        <p>
          +
          {extractNumber(plan.payment) +
            addOns.reduce((acc, curr) => acc + extractNumber(curr.payment), 0)}
          {isYearly ? '/yr' : '/mo'}
        </p>
      </div>
    </div>
  );
};

export default FinalChoiceCard;
