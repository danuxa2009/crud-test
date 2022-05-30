import './UserPage.scss';

import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import userImage from '../../assets/images/user.png';
import { Button, EditUserForm, Modal } from '../../components';
import { UsersContext } from '../../utils/context';

export function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { usersData, setUsersData } = useContext(UsersContext);

  const [userData, setUserData] = useState([]);
  const [isOnDeleteModalOpened, setOnDeleteModalOpened] = useState(false);
  const [isOnEditModalOpened, setOnEditModalOpened] = useState(false);
  const { name, lastName, email, id: userId } = userData;

  const getCurrentUser = () => {
    const getUsers = JSON.parse(localStorage.getItem('UsersList'));
    const curretUser = getUsers.filter((user) => user.id === +id);
    setUserData(...curretUser);
  };

  useEffect(() => {
    getCurrentUser();
  }, [usersData]);

  const openDeleteModalHandler = () => {
    setOnDeleteModalOpened(!isOnDeleteModalOpened);
  };

  const openEditModalHandler = () => {
    setOnEditModalOpened(!isOnEditModalOpened);
  };

  const deleteUser = () => {
    const deletedUser = usersData.filter((user) => user.id !== +id);
    setUsersData(deletedUser);
    localStorage.setItem('UsersList', JSON.stringify(deletedUser));
    navigate('/');
  };

  return (
    <div className="wrapper">
      <div className="user-content">
        <div className="user-image">
          <img alt="user" src={userImage} />
        </div>
        <div className="user-data">
          <p>Name: {name}</p>
          <p>Last Name: {lastName}</p>
          <p>E-mail: {email}</p>
          <p>Id: {userId}</p>
        </div>

        {
          isOnDeleteModalOpened
            && (
            <Modal
              modalText="Are you sure about this? You will redirected on main page"
              onCloseHandler={setOnDeleteModalOpened}
            >
              <div className="controls-container">
                <Button className="confirm-button" text="Confirm" onClick={deleteUser} />
                <Button className="cancel-button" text="Cancel" onClick={openDeleteModalHandler} />
              </div>
            </Modal>
            )
        }

        {
          isOnEditModalOpened
            && (
            <Modal modalText="Edit User" onCloseHandler={setOnEditModalOpened}>
              <EditUserForm
                currentUserData={userData}
                setIsModalOpened={setOnEditModalOpened}
              />
            </Modal>
            )
        }

        <div className="controls-wrapper">
          <Button className="edit-button" text="Edit User" onClick={openEditModalHandler} />
          <Button className="delete-button" text="Delete User" onClick={openDeleteModalHandler} />
        </div>
      </div>
    </div>
  );
}
