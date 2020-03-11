<script context="module">

  // Here we import the graphql client
  import client from "../apollo.js";
  import NODOS_TODOS from '../data/gql/NODOS_TODOS'  

  export async function preload() {
    return {
      cache: await client.query({
        query: NODOS_TODOS
      })
    };
  }

</script>

<script>

  import { setClient } from "svelte-apollo";
  import Nodos from '../components/Nodos/Nodos.svelte'

  setClient(client)

</script>

<Nodos />


