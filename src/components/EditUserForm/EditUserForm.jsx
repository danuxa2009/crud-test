import './EditUserForm.scss';

import { useContext, useEffect, useState } from 'react';
import { Button } from '../Button';
import { UsersContext } from '../../utils/context';

export const EditUserForm = ({ setIsModalOpened, currentUserData }) => {
  const [editedUserData, setEditedUserData] = useState([]);
  const { name, lastName, email, id } = editedUserData;
  const { usersData, setUsersData } = useContext(UsersContext);

  useEffect(() => {
    setEditedUserData(currentUserData);
  }, []);

  const editUserHandler = (e) => {
    e.preventDefault();
    const newData = usersData.map((user) => {
      if (user.id === +id) {
        return {
          ...user,
          ...editedUserData,
        };
      }
      return user;
    });
    localStorage.setItem('UsersList', JSON.stringify(newData));
    setUsersData(newData);
    setIsModalOpened(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalOpened(false);
  };

  const OnChangeInputHandler = (e, key) => setEditedUserData({ ...editedUserData, [key]: e.target.value });

  return (
    <form className="form-container">
      <input
        type="text"
        defaultValue={name}
        onChange={(e) => OnChangeInputHandler(e, 'name')}
        placeholder="Name"
      />
      <input
        type="text"
        defaultValue={lastName}
        onChange={(e) => OnChangeInputHandler(e, 'lastName')}
        placeholder="Last Name"
      />
      <input
        type="email"
        defaultValue={email}
        onChange={(e) => OnChangeInputHandler(e, 'email')}
        placeholder="E-mail"
      />
      <div className="control-container">
        <Button className="confirm-button" text="Edit user" onClick={editUserHandler} />
        <Button className="cancel-button" text="Cancel" onClick={handleCancel} />
      </div>
    </form>
  );
};
