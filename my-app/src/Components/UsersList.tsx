import { usePreloadedQuery, PreloadedQuery } from 'react-relay';
import { UsersByNationalityQuery } from '../relay/queries/UsersByNationalityQuery';
import type {
  UsersByNationalityQuery as UsersByNationalityQueryType,
  UsersByNationalityQuery$data,
} from '../__generated__/UsersByNationalityQuery.graphql';

type Props = {
  preloadedQuery: PreloadedQuery<UsersByNationalityQueryType>;
};

export default function UsersList({ preloadedQuery }: Props) {
  const data = usePreloadedQuery<UsersByNationalityQueryType>(
    UsersByNationalityQuery,
    preloadedQuery,
  );

  if (!data?.users) return null;

  return (
    <div>
      <h2>Users from </h2>
      <ul>
        {data.users.map((user, index) => (
          <li key={index}>
            {user?.name?.first} {user?.name?.last} – {user?.gender},{' '}
            {user?.dob?.age} years old
            {user?.location?.state}
          </li>
        ))}
      </ul>
    </div>
  );
}
