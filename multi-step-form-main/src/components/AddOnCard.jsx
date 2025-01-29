const AddOnCard = () => {
  return (
    <div className="addon__card">
      <input type="checkbox" />

      <div className="addon__card--content">
        <h3>Online Service</h3>
        <p>Access to multiplayer games</p>
      </div>

      <div className="addon__card--price">+$1/mo</div>
    </div>
  );
};

export default AddOnCard;
