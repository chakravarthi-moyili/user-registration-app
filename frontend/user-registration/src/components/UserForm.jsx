import React, { useState, useEffect } from 'react';
import './UseForm.css';

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [user, setUser] = useState({ name: '', email: '', dob: '' });

  useEffect(() => {
    if (editingUser) {
      setUser({ ...editingUser });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user); // Update user if editing
    } else {
      addUser(user); // Add new user if not editing
    }
    setUser({ name: '', email: '', dob: '' }); // Clear form after submit
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={user.dob}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className='add'>{editingUser ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
