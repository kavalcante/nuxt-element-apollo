import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default ({ store }) => {
  const httpLink = new HttpLink({ uri: '/graphql' });

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    // token system with JWT in auth state;

    // const { token } = store.state.auth;
    // if (token) {
    //   operation.setContext({
    //     headers: { Authorization: `JWT ${token}` },
    //   });
    // }
    return forward(operation);
  });

  const link = middlewareLink.concat(httpLink);
  return {
    link,
    cache: new InMemoryCache(),
  };
};
