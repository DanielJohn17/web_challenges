import Sidebar from './container/Sidebar';
// import StepOne from './container/StepOne';
// import StepTwo from './container/StepTwo';
import StepThree from './container/StepThree';

// styles
import './components/components_style.css';
import './container/containers_style.css';

const App = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <Sidebar />
        <StepThree />
      </div>
    </div>
  );
};

export default App;
