import { useEffect, useState } from 'react';
import Wrapper from '../wrappers/DashboardWrapper';
import Admin from './Admin';
import Profile from './Profile';

const Dashboard = () => {
  const [role, setRole] = useState('user');

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem('auth'));
    const { role } = auth.user;
    setRole(role);
  }, []);

  if (role === 'user') {
    return <Profile />;
  }

  return <Admin />;
};
export default Dashboard;
