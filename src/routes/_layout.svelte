<script context="module">

	// Here we import the graphql client
	import client from "../apollo.js";
	// import NODOS_TODOS from '../data/gql/NODOS_TODOS'  

	// export async function preload() {
	//   return {
	//     cache: await client.query({
	//       query: NODOS_TODOS
	//     })
	//   };
	// }

</script>

<script>

	import { setClient } from "svelte-apollo";

	import Nav from '../components/Nav.svelte';

	export let segment;
  // export let cache
  setClient(client)

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>

<Nav {segment} />

<main>
	<slot></slot>
</main>
