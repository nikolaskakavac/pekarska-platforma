import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('pekarskeUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (subscriptionLevel) => {
    const userData = {
      id: Date.now(),
      subscription: subscriptionLevel,
      joined: new Date().toISOString()
    };
    setUser(userData);
    localStorage.setItem('pekarskeUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pekarskeUser');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    hasSubscription: !!user && user.subscription !== 'guest',
    subscriptionLevel: user?.subscription || 'guest'
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
