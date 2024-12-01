import React, { useState } from 'react';
import Modal from 'react-modal';
import './Users.css';

Modal.setAppElement('#root'); // برای اطمینان از اینکه عنصر ریشه به‌درستی تنظیم شده است.

const initialUsers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', age: '' });
  const [editUser, setEditUser] = useState(null);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAddUserModal = () => {
    setNewUser({ name: '', email: '', age: '' });
    setIsAddUserModalOpen(true);
  };

  const closeAddUserModal = () => setIsAddUserModalOpen(false);

  const openEditUserModal = (user) => {
    setEditUser(user);
    setIsEditUserModalOpen(true);
  };

  const closeEditUserModal = () => setIsEditUserModalOpen(false);

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    closeAddUserModal();
  };

  const handleEditUser = () => {
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    closeEditUserModal();
  };

  const handleDeleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  return (
    <div className="user-panel">
      <h1>User Management</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="add-user-button" onClick={openAddUserModal}>+ Add User</button>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditUserModal(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding a new user */}
      <Modal
        isOpen={isAddUserModalOpen}
        onRequestClose={closeAddUserModal}
        className="Modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <h2>Add New User</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <label>Email</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
          <label>Age</label>
          <input
            type="number"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            required
          />
          <button onClick={handleAddUser} className='active'>Add User</button>
          <button onClick={closeAddUserModal} className='actived'>Cancel</button>
        </form>
      </Modal>

      {/* Modal for editing a user */}
      <Modal
        isOpen={isEditUserModalOpen}
        onRequestClose={closeEditUserModal}
        className="Modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <h2>Edit User</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            value={editUser?.name || ""}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            required
          />
          <label>Email</label>
          <input
            type="email"
            value={editUser?.email || ""}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            required
          />
          <label>Age</label>
          <input
            type="number"
            value={editUser?.age || ""}
            onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
            required
          />
          <div className="button-group">
            <button onClick={handleEditUser} className='save-button'>Save Changes</button>
            <button onClick={closeEditUserModal} className='cancel-button'>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Users;