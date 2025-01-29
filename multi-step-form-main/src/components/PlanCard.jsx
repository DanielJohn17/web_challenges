import PropTypes from 'prop-types';

const PlanCard = ({
  plan,
  yearlyPlan,
  index,
  cardClicked,
  handleCardClicked,
}) => {
  return (
    <div
      className="plan__card"
      onClick={() => handleCardClicked(index)}
      style={
        cardClicked[index]
          ? {
              borderColor: 'var(--purplish-blue)',
              background: 'rgb(calc(var(----purplish-blue)) / 0.5)',
            }
          : {}
      }
    >
      <div className="plan__card--icon">
        <img src={plan.icon} alt={plan.name} />
      </div>

      <div className="plan__card--info">
        <h3>{plan.name}</h3>
        <p>{yearlyPlan ? plan.planPayment.yearly : plan.planPayment.monthly}</p>
        {yearlyPlan && <p className="last">2 months free</p>}
      </div>
    </div>
  );
};

export default PlanCard;
