import { BrowserRouter, Route, Routes } from 'react-router';
import { lazy, useState } from 'react';
import { User, UserContext } from './context/UserContext';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Register = lazy(() => import('./pages/Register'));
const MePage = lazy(() => import('./pages/Me'));
const Users = lazy(() => import('./pages/Users'));

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard setUser={setUser} />}>
            <Route index element={<MePage />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
