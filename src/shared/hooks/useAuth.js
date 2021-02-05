import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
