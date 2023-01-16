import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem('auth'));
    if (!auth.isAuth) {
      navigate('/');
    }
  });

  return children;
};
export default ProtectedRoute;
