import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import MePage from './pages/Me';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />;
    </BrowserRouter>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<MePage />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
