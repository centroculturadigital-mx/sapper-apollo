import { gql } from 'apollo-boost'

const INGRESA = gql`
mutation INGRESA (
    $email: String,
    $password: String
){
    authenticateUserWithPassword (  
         email: $email,  
         password: $password  
    ) {  
        token  
        item {  
            name  
            email  
            isAdmin  
        }  
    }  
}
`

export default INGRESA