import { graphql } from 'react-relay';

export const UsersByNationalityQuery = graphql`
  query UsersByNationalityQuery($nat: String!) {
    users(nat: $nat, results: 20) {
      name {
        first
        last
      }
      gender
      dob {
        date
        age
      }
    }
  }
`;
