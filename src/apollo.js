import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

import { getToken } from "./manage-jwt";
// TODO: Put in .env file
const GQL_SERVER_ENDPOINT = 'http://localhost:3000/admin/api'

export default new ApolloClient({ 
    uri: GQL_SERVER_ENDPOINT, fetch,
    request: operation => {
        const token = getToken();
        if (token) {
            operation.setContext({
                headers: {
                    "x-access-token": token,
                }
            });
        }
    }
});
