

<script>
  import { setClient } from "svelte-apollo";

  import client from "../../apollo.js";
  import Ingresa from '../../components/Ingresa/Ingresa.svelte'

  setClient(client)
</script>

<svelte:head>
  <title>Ingresa</title>
</svelte:head>

<h1>Ingresa</h1>

<Ingresa />
