import Sidebar from './container/Sidebar';
// import StepOne from './container/StepOne';
// import StepTwo from './container/StepTwo';
// import StepThree from './container/StepThree';
// import StepFour from './container/StepFour';
import StepFive from './container/StepFive';

// styles
import './components/components_style.css';
import './container/containers_style.css';

const App = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <Sidebar />
        <StepFive />
      </div>
    </div>
  );
};

export default App;
