import './UsersList.scss';
import { useContext, useState } from 'react';
import { AddUserForm, Button, UserCard, Modal } from '../../components';
import { UsersContext } from '../../utils/context';

export const UsersList = () => {
  const { usersData } = useContext(UsersContext);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModalHandler = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <div className="wrapper">
      <div className="users-list-container">

        {
          usersData?.length
            ? usersData.map(({ name, lastName, id, email }) => (
              <UserCard
                key={id}
                name={name}
                lastName={lastName}
                id={id}
                email={email}
              />
            ))
            : <p>Users is not exists</p>

        }

      </div>
      {
        isModalOpened
        && (
        <Modal modalText="Add new user" onCloseHandler={setIsModalOpened}>
          <AddUserForm setIsModalOpened={setIsModalOpened} />
        </Modal>
        )
      }

      <Button className="add-user-button" text="Add new user" onClick={openModalHandler} />

    </div>
  );
};
