import { useParams } from "react-router-dom";

export const UserPage = () => {

  const { id } = useParams();
  const getCurrentUser = JSON.parse(localStorage.getItem("UsersList"));

  return(
    <div>USER PAGE</div>
  )
}