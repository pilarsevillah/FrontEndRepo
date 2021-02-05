import React from 'react';
import decodeTokenData from '../utils/decodeTokenData';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login, signUpApi } from '../http/api';

export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;

const token = localStorage.getItem('token');
const tokenObject = decodeTokenData(token);

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(tokenObject);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  const history = useHistory();

  const signIn = async (email, password) => {
    const loginData = await login(email, password);
    localStorage.setItem('token', loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push('/');
  };

  const signUp = async (email, password) => {
    const message = await signUpApi;
    return message;
  };

  const signOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
    setUserData(null);
    setIsUserLogged(false);
  };

  return (
    <AuthContextProvider value={{ userData, signIn, signOut, signUp, isUserLogged }}>{children}</AuthContextProvider>
  );
}
