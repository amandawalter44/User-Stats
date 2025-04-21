import React, { useState } from 'react';
import styles from './UserStats.module.scss';
import UsersList from './UsersList';
import { useQueryLoader } from 'react-relay/hooks';
import { UsersByNationalityQuery } from '../relay/queries/UsersByNationalityQuery';
import type { UsersByNationalityQuery as UsersByNationalityQueryType } from '../__generated__/UsersByNationalityQuery.graphql';
import { startTransition } from 'react';

const UserStats = () => {
  const [numUsers, setNumUsers] = useState(200);
  const [usersNationality, setUsersNationality] = useState('us');

  const [queryRef, loadQuery] =
    useQueryLoader<UsersByNationalityQueryType>(UsersByNationalityQuery);

  const NATIONALITIES = [
    'AU',
    'BR',
    'CA',
    'CH',
    'DE',
    'DK',
    'ES',
    'FI',
    'FR',
    'GB',
    'IE',
    'IN',
    'IR',
    'MX',
    'NL',
    'NO',
    'NZ',
    'RS',
    'TR',
    'UA',
    'US',
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      loadQuery({ nat: usersNationality, numResults: numUsers });
    });
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
          <select
            id="nationality"
            value={usersNationality}
            onChange={(e) => setUsersNationality(e.target.value.toLowerCase())}
          >
            {NATIONALITIES.map((nat) => (
              <option key={nat} value={nat.toLowerCase()}>
                {nat}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {queryRef && <UsersList preloadedQuery={queryRef} />}
    </div>
  );
};

export default UserStats;
