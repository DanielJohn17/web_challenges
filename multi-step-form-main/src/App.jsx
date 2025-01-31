import { BrowserRouter, Routes, Route, useNavigate } from 'react-router';
import { useState } from 'react';

import StepLayout from './layouts/StepsLayout';
import StepOne from './container/StepOne';
import StepTwo from './container/StepTwo';
import StepThree from './container/StepThree';
import StepFour from './container/StepFour';
import StepFive from './container/StepFive';
import { subscriptionContext } from './context/context';

// styles
import './components/components_style.css';
import './container/containers_style.css';

const App = () => {
  return (
    <subscriptionContext.Provider value={{}}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </subscriptionContext.Provider>
  );
};

const AppRoutes = () => {
  const navigate = useNavigate();
  const [subscriptionData, setSubscriptionData] = useState({
    user: null,
    plan: null,
    addOns: null,
    isYearly: false,
  });

  const handleNextStep = (nextLink) => {
    navigate(nextLink);
  };

  const handleBackStep = (backLink) => {
    navigate(backLink);
  };

  const updateSubscriptionData = (newData) => {
    setSubscriptionData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <subscriptionContext.Provider
      value={{
        ...subscriptionData,
        handleNextStep,
        handleBackStep,
        updateSubscriptionData,
      }}
    >
      <Routes>
        <Route path="/" element={<StepLayout />}>
          <Route index element={<StepOne />} />
          <Route path="step-2" element={<StepTwo />} />
          <Route path="step-3" element={<StepThree />} />
          <Route path="step-4" element={<StepFour />} />
          <Route path="step-5" element={<StepFive />} />
        </Route>
      </Routes>
    </subscriptionContext.Provider>
  );
};

export default App;
