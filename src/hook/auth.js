import React, {
  useCallback, useState, useContext, createContext,
} from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@ECOMMERCE:user');
    if (user) {
      return { user: JSON.parse(user) };
    }
    return {};
  });

  const signIn = useCallback(async (email, usuario) => {
    const response = await api.get('cliente');
    console.log('Clientes', response);

    const user = response.data.filter(
      (dataApi) => (dataApi.email === email && dataApi.usuario === usuario),
    );

    console.log('user', user);
    if (user.length > 0) {
      localStorage.setItem('@ECOMMERCE:user', JSON.stringify(user[0]));
      setData({ user: user[0] });
    } else {
      throw new Error('User or password invalid');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ECOMMERCE:user');
    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>

  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth error');
  }
  return context;
}

export { AuthProvider, useAuth };
