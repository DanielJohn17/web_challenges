const FinalChoiceCard = () => {
  return (
    <div className="choice__card">
      <div className="choice__card--summery">
        <div className="choice__card--summery_sub">
          <span>
            <h3>Arcade &#40;Monthly&#41;</h3>
            <a href="#">Change</a>
          </span>

          <p>$9/mo</p>
        </div>

        <div className="line-break" />

        <div className="choice__card--summery_other">
          <div>
            <p>Online Service</p>
            <p>+1/mo</p>
          </div>

          <div>
            <p>Larger Storage</p>
            <p>+2/mo</p>
          </div>
        </div>
      </div>

      <div className="choice__card--total">
        <p>Total &#40;per month&#41;</p>
        <p>+$12/mo</p>
      </div>
    </div>
  );
};

export default FinalChoiceCard;
