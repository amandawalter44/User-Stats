import { useLazyLoadQuery } from 'react-relay';
import { UsersByNationalityQuery } from '../../../src/relay/queries/UsersByNationalityQuery';
import type { UsersByNationalityQuery as UsersByNationalityQueryType } from '../../../src/__generated__/UsersByNationalityQuery.graphql';

type Props = {
  nationality: string;
};

export default function UsersList({ nationality }: Props) {
  const data = useLazyLoadQuery<UsersByNationalityQueryType>(
    UsersByNationalityQuery,
    { nat: nationality },
    { fetchPolicy: 'store-or-network' }, // optional
  );
  if (!data || !data.users) return;
  return (
    <div>
      <h2>Users from {nationality}</h2>
      <ul>
        {data!.users!.map((user, index) => (
          <li key={index}>
            {user!.name?.first} {user!.name?.last} – {user!.gender},{' '}
            {user!.dob?.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}
