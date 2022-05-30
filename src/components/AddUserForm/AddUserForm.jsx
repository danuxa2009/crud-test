import './AddUserForm.scss';

import { useContext, useState } from 'react';
import { Button } from '../Button';
import { UsersContext } from '../../utils/context';

export function AddUserForm({ setIsModalOpened }) {
  const [userData, setUserData] = useState([]);
  const { usersData, setUsersData } = useContext(UsersContext);

  const userId = usersData.length + 1;
  const newUser = { id: userId, ...userData };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsersData([...usersData, newUser]);
    localStorage.setItem('UsersList', JSON.stringify([...usersData, newUser]));
    setIsModalOpened(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalOpened(false);
  };

  const OnChangeInputHandler = (e, key) => setUserData({ ...userData, [key]: e.target.value });

  return (
    <form className="form-container">
      <input type="text" onChange={(e) => OnChangeInputHandler(e, 'name')} placeholder="Name" />
      <input type="text" onChange={(e) => OnChangeInputHandler(e, 'lastName')} placeholder="Last Name" />
      <input type="email" onChange={(e) => OnChangeInputHandler(e, 'email')} placeholder="E-mail" />
      <div className="control-container">
        <Button className="confirm-button" text="Add user" onClick={handleSubmit} />
        <Button className="cancel-button" text="Cancel" onClick={handleCancel} />
      </div>
    </form>
  );
}
