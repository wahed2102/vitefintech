import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/dashboard/profile" element={<Profile />} />
    </Routes>
  );
};
export default MainRoutes;
