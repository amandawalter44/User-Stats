import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
  CacheConfig,
  GraphQLResponse,
} from 'relay-runtime';

function fetchGraphQL(
  request: RequestParameters,
  variables: Variables,
  _cacheConfig: CacheConfig,
): Promise<GraphQLResponse> {
  return fetch('https://nextjs-randomuser-graphql.vercel.app/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  }).then((response) => response.json());
}

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
