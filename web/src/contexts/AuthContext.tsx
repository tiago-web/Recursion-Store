import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
};

type AuthState = {
  token: string;
  user: TUser;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: TUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: TUser): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Recursion:token');
    const user = localStorage.getItem('@Recursion:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Recursion:token', token);
    localStorage.setItem('@Recursion:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Recursion:token');
    localStorage.removeItem('@Recursion:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    ({ firstName, lastName, email, phone }: TUser) => {
      const userStr = localStorage.getItem('@Recursion:user');
      let user: TUser = {} as TUser;

      if (userStr) user = JSON.parse(userStr);

      const updatedUser = { ...user, firstName, lastName, email, phone };

      localStorage.setItem('@Recursion:user', JSON.stringify(updatedUser));

      setData({
        token: data.token,
        user: updatedUser,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
