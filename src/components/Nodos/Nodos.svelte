<script>
    import { query, getClient } from "svelte-apollo";
    import { goto } from '@sapper/app';
    import NODOS_TODOS from '../../data/gql/NODOS_TODOS'

    import Redirect from '../Redirect.svelte'

    const client = getClient()
    const nodos = query(client, { query: NODOS_TODOS });
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<h1>Nodos</h1>

{#await $nodos}
  <p>Loading...</p>
{:then result}

<ul>

  {#each result.data.allNodos as nodo, i (`nodo_${i}`) }
  <li>
    {nodo.nombre}
  </li>
  {/each}
</ul>

{:catch error}

  <Redirect route="/ingreso"/>

{/await}