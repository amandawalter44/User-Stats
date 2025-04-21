import React, { useState, useMemo } from 'react';
import styles from './UserStats.module.scss';
import UsersList from './UsersList';
import { loadQuery, PreloadedQuery } from 'react-relay/hooks';
import { RelayEnvironment } from '../relay/RelayEnvironment';
import { UsersByNationalityQuery } from '../relay/queries/UsersByNationalityQuery';
import type { UsersByNationalityQuery as UsersByNationalityQueryType } from '../__generated__/UsersByNationalityQuery.graphql';

const UserStats = () => {
  const [numUsers, setNumUsers] = useState(200);
  const [usersNationality, setUsersNationality] = useState('us');
  console.log('RelayEnvironment:', RelayEnvironment);

  const preloadedQuery: PreloadedQuery<UsersByNationalityQueryType> =
    useMemo(() => {
      return loadQuery(RelayEnvironment, UsersByNationalityQuery, {
        nat: usersNationality.toUpperCase(),
      });
    }, [usersNationality]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Number of Users', numUsers);
    console.log('Nationality of Users', usersNationality);
    // Refetch
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

      <UsersList preloadedQuery={preloadedQuery} />
    </div>
  );
};

export default UserStats;
