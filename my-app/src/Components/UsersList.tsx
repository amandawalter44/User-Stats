import { usePreloadedQuery, PreloadedQuery } from 'react-relay';
import { UsersByNationalityQuery } from '../relay/queries/UsersByNationalityQuery';
import type {
  UsersByNationalityQuery as UsersByNationalityQueryType,
  UsersByNationalityQuery$data,
  Gender,
} from '../__generated__/UsersByNationalityQuery.graphql';

type Props = {
  preloadedQuery: PreloadedQuery<UsersByNationalityQueryType>;
};

export default function UsersList({ preloadedQuery }: Props) {
  const data = usePreloadedQuery<UsersByNationalityQueryType>(
    UsersByNationalityQuery,
    preloadedQuery,
  );

  console.log('DATA', data);

  const calculateGenderPercentage = (
    users: UsersByNationalityQuery$data['users'],
  ): Record<Gender, number> => {
    if (!users?.length) return { female: 0, male: 0, '%future added value': 0 };

    const totalUsers = users.filter(
      (user) => user?.gender !== undefined && user?.gender !== null,
    ).length;

    const genderCount = users.reduce<Record<Gender, number>>(
      (acc, user) => {
        if (user?.gender) {
          acc[user.gender] = (acc[user.gender] || 0) + 1;
        }
        return acc;
      },
      {
        female: 0,
        male: 0,
        '%future added value': 0,
      },
    );

    const genderPercentages = Object.keys(genderCount).reduce(
      (acc, gender) => {
        const typedGender = gender as Gender;
        acc[typedGender] = totalUsers > 0 ? (genderCount[typedGender] / totalUsers) * 100 : 0;
        return acc;
      },
      {} as Record<Gender, number>,
    );

    return genderPercentages;
  };

  console.log('PERCENTAGE CALCULATED ', calculateGenderPercentage(data.users));
  const genderPercentages = calculateGenderPercentage(data.users);
  if (!data?.users) return null;

  return (
    <section aria-labelledby="gender-stats-heading">
      <h2 id="gender-stats-heading" className="sr-only">
        User Gender Distribution
      </h2>
      {Object.entries(genderPercentages).map(
        ([gender, percentage]) =>
          percentage > 0 && (
            <div key={gender}>
              <strong>{gender}:</strong> {percentage.toFixed(1)}%
            </div>
          ),
      )}
    </section>
  );
}
