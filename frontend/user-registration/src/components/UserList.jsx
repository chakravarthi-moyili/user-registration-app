import React from 'react';
import './UserList.css';

const UserList = ({ users, deleteUser, editUser }) => {
  
    const formatDate = (date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${day}-${month}-${year}`; 
      };

    return (
    <div>
        <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{formatDate(user.dob)}</td>
              <td>
                <div className="actions">
                  <button onClick={() => editUser(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
