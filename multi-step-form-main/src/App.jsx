import Sidebar from './container/Sidebar';
// import StepOne from './container/StepOne';
import StepTwo from './container/StepTwo';

// styles
import './components/components_style.css';
import './container/containers_style.css';

const App = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <Sidebar />
        <StepTwo />
      </div>
    </div>
  );
};

export default App;
