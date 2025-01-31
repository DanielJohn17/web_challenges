import { BrowserRouter, Routes, Route, useNavigate } from 'react-router';
// import { useEffect } from 'react';

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

  // useEffect(() => {
  //   const handleFirstStep = () => navigate('/step-1');

  //   handleFirstStep();
  // }, []);

  const handleNextStep = (nextLink) => {
    navigate(nextLink);
  };

  const handleBackStep = (backLink) => {
    navigate(backLink);
  };

  return (
    <subscriptionContext.Provider value={{ handleNextStep, handleBackStep }}>
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
