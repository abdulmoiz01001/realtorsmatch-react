import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectIfAuth = (redirectTo: string = '/pricing') => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, token, redirectTo]);

  return !!token; // return true if logged in
};
