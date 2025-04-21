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

  const genderPercentages = calculateGenderPercentage(data.users);

  type AgeRange = '0-20' | '21-40' | '41-60' | '61-80' | '81-100' | '100+';

  const calculateAgeRangePercentages = (
    users: UsersByNationalityQuery$data['users'],
  ): Record<AgeRange, number> => {
    const ageRanges: Record<AgeRange, number> = {
      '0-20': 0,
      '21-40': 0,
      '41-60': 0,
      '61-80': 0,
      '81-100': 0,
      '100+': 0,
    };

    if (!users || !users.length) return ageRanges;

    const validAges = users.filter((user) => user?.dob?.age != null);

    for (const user of validAges) {
      const age = user?.dob?.age!;
      if (age <= 20) ageRanges['0-20']++;
      else if (age <= 40) ageRanges['21-40']++;
      else if (age <= 60) ageRanges['41-60']++;
      else if (age <= 80) ageRanges['61-80']++;
      else if (age <= 100) ageRanges['81-100']++;
      else ageRanges['100+']++;
    }

    const total = validAges.length;

    const percentages = Object.entries(ageRanges).reduce(
      (acc, [range, count]) => {
        acc[range as AgeRange] = total > 0 ? (count / total) * 100 : 0;
        return acc;
      },
      {} as Record<AgeRange, number>,
    );

    return percentages;
  };

  const calculateLastNameLengthCounts = (
    users: UsersByNationalityQuery$data['users'],
  ): Record<number, number> => {
    const lengthCounts: Record<number, number> = {};
    if (!users) return { 0: 0 };

    for (const user of users) {
      const lastName = user?.name?.last;
      if (lastName) {
        const length = lastName.length;
        lengthCounts[length] = (lengthCounts[length] || 0) + 1;
      }
    }

    return lengthCounts;
  };

  if (!data?.users) return null;

  return (
    <>
      <section aria-labelledby="gender-stats-heading">
        <h2 id="gender-stats-heading" className="sr-only">
          Gender
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

      <section aria-labelledby="age-range-heading">
        <h2 id="age-range-heading" className="sr-only">
          Age Range
        </h2>
        {Object.entries(calculateAgeRangePercentages(data.users)).map(
          ([range, percentage]) =>
            percentage > 0 && (
              <div key={range}>
                <strong>{range}:</strong> {percentage.toFixed(1)}%
              </div>
            ),
        )}
      </section>
      <section aria-labelledby="last-name-length-heading">
        <h2 id="last-name-length-heading" className="sr-only">
          User Count by Last Name Length
        </h2>
        {Object.entries(calculateLastNameLengthCounts(data.users)).map(([length, count]) => (
          <div key={length}>
            <strong>{length} letters:</strong> {count} user{count > 1 ? 's' : ''}
          </div>
        ))}
      </section>
    </>
  );
}
