import { useState } from 'react'
import { Button } from '../Button'
import './AddUserForm.scss'

export const AddUserForm = ({setIsModalOpened, usersData, usersCount, setUsersData}) => {

  const [userData, setUserData] = useState([])
  const newUser = {id: usersCount + 1, ...userData }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsersData([...usersData, newUser])
    localStorage.setItem("UsersList", JSON.stringify([...usersData, newUser]));
    setIsModalOpened(false)
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalOpened(false)
  }
  

  const OnChangeInputHandler = (e, key) => setUserData({...userData, [key]: e.target.value})

  return(
    <form className="form-container">
      <input type={'text'} onChange={(e) => OnChangeInputHandler(e, 'name')} placeholder="Name"/>
      <input type={'text'} onChange={(e) => OnChangeInputHandler(e, 'lastName')} placeholder="Last Name"/>
      <input type={'email'} onChange={(e) => OnChangeInputHandler(e, 'email')} placeholder="E-mail"/>
      <div className="control-container">
          <Button className={'confirm-button'} onClick={handleSubmit} text={'Add user'} />
          <Button className={'cancel-button'} text={'Cancel'} onClick={handleCancel}/>
      </div>
    </form>
  )
}