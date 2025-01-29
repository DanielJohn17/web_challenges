import AddOnCard from '../components/AddOnCard';
import StepHeader from '../components/StepHeader';
import Button from '../components/Button';

const StepThree = () => {
  return (
    <div className="step__container">
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <div className="step__container--add">
        <AddOnCard />
        <AddOnCard />
        <AddOnCard />
      </div>

      <div className="step__container--buttons">
        <Button type="back">Go Back</Button>
        <Button type="next">Next Step</Button>
      </div>
    </div>
  );
};

export default StepThree;
