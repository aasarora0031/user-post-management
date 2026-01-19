import UserForm from "./UserForm"

export default function EditUserModal({user , onClose , onSave}){
return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Edit User</h2>

        <UserForm
          initialData={user}
          onSave={onSave}
          onCancel={onClose}
          submitText="Save"
        />
      </div>
    </div>
  );
}

const overlayStyle={
 position: "fixed",
   inset: 0,
   background: "rgba(0,0,0,0.4)",
   display: "flex",
   justifyContent: "center",
   alignItems: "center"   
}

const modalStyle = {
  padding: "20px",
  borderRadius: "6px",
  width: "300px",
}