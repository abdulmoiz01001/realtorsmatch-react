import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AlreadyAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/pricing', { replace: true });
    }
  }, [navigate]);

  return null; // This component only redirects, renders nothing
};

export default AlreadyAuthRedirect;
