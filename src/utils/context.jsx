import React, { useEffect, useMemo, useState } from 'react';

export const UsersContext = React.createContext();

export const UsersContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const getUsers = JSON.parse(localStorage.getItem('UsersList'));

  useEffect(() => {
    if (getUsers === null) {
      setUsersData([]);
    } else {
      setUsersData(getUsers);
    }
  }, []);

  const value = useMemo(() => ({ usersData, setUsersData }), [usersData]);

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};
