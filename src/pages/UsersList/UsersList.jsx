import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AddUserForm, Button, UserCard, Modal } from "../../components";
import './UsersList.scss'

export const UsersList = () => {

  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([])
  const [isModalOpened, setIsModalOpened] = useState(false)
  const getUsers = JSON.parse(localStorage.getItem("UsersList"));


  const handleClick = (id) => {
    navigate(`user/${id}`);
  }
  
  useEffect(() => {
    if (getUsers === null) {
      setUsersData([])
    } else {
      setUsersData(getUsers);
    }
    }, [])

  return (
    <div className='wrapper'>
      <div className='users-list-container'>

        {
          usersData?.length 
          ? 
          usersData.map(({name, lastName, id, email}) => (
            <UserCard 
              key={id}
              name={name}
              lastName={lastName}
              id={id}
              email={email}
              onClick={() => handleClick(id)} />))
            :
            <p>Users is not exists</p>
            
        }

      </div>
      {
        isModalOpened && 
        <Modal modalText={'Add new user'} onCloseHandler={setIsModalOpened}>
          <AddUserForm
            usersData={usersData}
            usersCount={usersData.length}
            setIsModalOpened={setIsModalOpened}
            setUsersData={setUsersData}
            />
        </Modal>
      }

      <Button className={'add-user-button'} text={'Add new user'} onClick={() => setIsModalOpened(!isModalOpened)} />
      
    </div>
  )
  
}