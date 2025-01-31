import FinalChoiceCard from '../components/FinalChoiceCard';
import StepHeader from '../components/StepHeader';
import Button from '../components/Button';

const StepFour = () => {
  return (
    <div className="step__container">
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <FinalChoiceCard />

      <div className="step__container--buttons ">
        <Button type="back">Go Back</Button>
        <Button type="next">Confirm</Button>
      </div>
    </div>
  );
};

export default StepFour;
