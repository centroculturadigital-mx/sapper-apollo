import { gql } from "apollo-boost";

const NODOS_TODOS = gql`
    {
        allNodos {
            nombre
        }
    }
`;

export default NODOS_TODOS