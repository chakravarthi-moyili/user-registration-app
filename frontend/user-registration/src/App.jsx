import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3006/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Add a new user
  const addUser = async (user) => {
    try {
      await axios.post('http://localhost:3006/users', user);
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Update an existing user
  const updateUser = async (user) => {
    try {
      await axios.put(`http://localhost:3006/users/${user.id}`, user);
      fetchUsers();
      setEditingUser(null); // Reset editing state after update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3006/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle edit user
  const editUser = (user) => {
    setEditingUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User Registration</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
