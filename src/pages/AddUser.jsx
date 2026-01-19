import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useUsers } from "../context/UsersContext";

export default function AddUser() {
  const navigate = useNavigate();
  const { addUser } = useUsers();

  function handleSave(userData) {
    addUser(userData);
    navigate("/users");
  }

  function handleCancel() {
    navigate("/users");
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Add User</h1>

      <UserForm
        onSave={handleSave}
        onCancel={handleCancel}
        submitText="Add"
      />
    </div>
  );
}
