import ApolloClient from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GQL_SERVER_ENDPOINT = 'http://localhost:3000/admin/api'

const link = createHttpLink({
    uri: GQL_SERVER_ENDPOINT,
    fetch,
    credentials: 'include'
});

// TODO: Put in .env file

export default new ApolloClient({ 
    link,
    cache: new InMemoryCache(),
});
