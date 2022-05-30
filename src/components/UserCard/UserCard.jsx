import { Link } from 'react-router-dom';
import './UserCard.scss';

export const UserCard = ({ name, lastName, id, email }) => (
  <Link to={`user/${id}`} className="container">
    <p>Name: {name} </p>
    <p>Last Name: {lastName}</p>
    <p>E-mail: {email}</p>
    <p>Id: {id}</p>
  </Link>
);
