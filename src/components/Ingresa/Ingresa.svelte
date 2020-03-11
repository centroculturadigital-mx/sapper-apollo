<script>
    import { getClient, mutate } from 'svelte-apollo'

    import INGRESA from '../../data/gql/INGRESA'
    import { saveToken } from '../../manage-jwt'


    const client = getClient()
    

    let email
    let password
    const ingresa = async (evento) => {
        console.log('ingresa');
        
        try {

            const res = await mutate(client, {
                mutation: INGRESA,
                variables: { email, password }
            });
            console.log(res)
            console.log(res.data)
            console.log(res.data.authenticateUserWithPassword)

            saveToken(res.data.authenticateUserWithPassword.token)

        } catch(error) {
            console.log(error)
        // TODO
        }
    }
</script>

<form on:submit|preventDefault={ingresa}>
    <label for="book-author">Email</label>
    <input type="email" bind:value={email}>

    <label for="book-title">Password</label>
    <input type="password" bind:value={password}>

    <input type="submit" value="Ingresa"/>
</form>