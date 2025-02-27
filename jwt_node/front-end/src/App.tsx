import { BrowserRouter, Route, Routes } from 'react-router';
import { lazy, useState } from 'react';
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Register = lazy(() => import('./pages/Register'));
const MePage = lazy(() => import('./pages/Me'));
const Users = lazy(() => import('./pages/Users'));

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
