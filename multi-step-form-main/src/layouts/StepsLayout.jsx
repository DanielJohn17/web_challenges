import { Outlet } from 'react-router';
import Sidebar from '../container/Sidebar';

const StepLayout = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default StepLayout;
