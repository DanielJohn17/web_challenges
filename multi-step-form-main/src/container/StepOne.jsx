import { useState } from 'react';

import Button from '../components/Button';
import InputInfo from '../components/InputInfo';
import StepHeader from '../components/StepHeader';

const StepOne = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNextStep = () => {
    if (!name || !email || !phone) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="step__container">
      <div>
        <StepHeader
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />

        <div className="step__container--inputs">
          <InputInfo
            label="Name"
            inputType="text"
            placeholder="Stephen King"
            value={name}
            error={error}
            handleChange={handleNameChange}
          />
          <InputInfo
            label="Email Address"
            inputType="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            error={error}
            handleChange={handleEmailChange}
          />
          <InputInfo
            label="Phone Number"
            inputType="tel"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            error={error}
            handleChange={handlePhoneChange}
          />
        </div>
      </div>

      <div className="step__container--buttons">
        <Button type="next" handleClick={handleNextStep}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
