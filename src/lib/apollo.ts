import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6z2w10w1o01xi12273cz7/master',
  cache: new InMemoryCache()
});
