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
      onClick={() => handleCardClicked(index, plan, yearlyPlan)}
      style={
        cardClicked.index === index
          ? {
              borderColor: 'var(--purplish-blue)',
              backgroundColor: 'hsla(228, 100%, 84%, 0.05)',
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

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired,
  yearlyPlan: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  cardClicked: PropTypes.object.isRequired,
  handleCardClicked: PropTypes.func.isRequired,
};
