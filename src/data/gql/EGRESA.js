import { gql } from 'apollo-boost'

const EGRESA = gql`
mutation EGRESA {
    unauthenticateUser {  
        success
    }  
}
`

export default EGRESA