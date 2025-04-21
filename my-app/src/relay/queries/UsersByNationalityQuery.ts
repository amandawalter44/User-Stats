import { graphql } from 'babel-plugin-relay/macro';

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
