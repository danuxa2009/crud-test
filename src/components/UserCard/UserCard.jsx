import './UserCard.scss'

export const UserCard = ({name, lastName, id, email, onClick}) => {
  return(
    <div className="container" onClick={onClick}>
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
      <p>E-mail: {email}</p>
      <p>Id: {id}</p>
    </div>
  ) 
}