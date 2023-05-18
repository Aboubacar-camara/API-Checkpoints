import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import du fichier CSS personnalisé

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1 className="user-list__title">User List</h1>
      <ul className="user-list__items">
        {listOfUsers.map(user => (
          <li className="user-list__item" key={user.id}>
            <div className="user-list__item-name">{user.name}</div>
            <div className="user-list__item-email">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
