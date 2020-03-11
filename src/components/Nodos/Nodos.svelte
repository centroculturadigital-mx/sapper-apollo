<script>
    import { query, getClient } from "svelte-apollo";
    import NODOS_TODOS from '../../data/gql/NODOS_TODOS'

    const client = getClient()
    const nodos = query(client, { query: NODOS_TODOS });

    console.log(nodos)
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
<p>Error: {error}</p>
{/await}