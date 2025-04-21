import { graphql } from 'babel-plugin-relay/macro';

export const UsersByNationalityQuery = graphql`
  query UsersByNationalityQuery($nat: String!, $numResults: Int) {
    users(nat: $nat, results: $numResults) {
      name {
        first
        last
      }
      gender
      dob {
        age
      }
      location {
        state
      }
    }
  }
`;
