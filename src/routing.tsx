import { Route, Routes } from 'react-router';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default Routing;
