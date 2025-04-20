import React, { useState } from 'react';
import styles from './UserStats.module.scss';
import UsersList from './UsersList';

const UserStats = () => {
  const [numUsers, setNumUsers] = useState(200);
  const [usersNationality, setUsersNationality] = useState('us');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Number of Users', numUsers);
    console.log('Nationality of Users', usersNationality);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number">Number of Users:</label>
          <input
            id="number"
            type="number"
            value={numUsers}
            onChange={(e) => setNumUsers(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="nationality">Nationality of Users:</label>
          <input
            id="nationality"
            type="text"
            value={usersNationality}
            onChange={(e) => setUsersNationality(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <UsersList nationality="US" />
    </div>
  );
};

export default UserStats;
