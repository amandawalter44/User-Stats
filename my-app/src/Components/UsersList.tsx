import { useLazyLoadQuery } from 'react-relay';
import { UsersByNationalityQuery } from '../relay/queries/UsersByNationalityQuery';
import type {
  UsersByNationalityQuery as UsersByNationalityQueryType,
  UsersByNationalityQuery$data,
} from '../__generated__/UsersByNationalityQuery.graphql';
type Props = {
  nationality: string;
};

export default function UsersList({ nationality }: Props) {
  const data = useLazyLoadQuery<UsersByNationalityQueryType>(
    UsersByNationalityQuery,
    { nat: nationality },
    { fetchPolicy: 'store-or-network' },
  );
  console.log('DATA?? ', data);
  if (!data || !data.users) return null;
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
