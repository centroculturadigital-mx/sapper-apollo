<script>
  import { getClient, mutate } from 'svelte-apollo'

  import { goto } from '@sapper/app';

  import EGRESA from '../data/gql/EGRESA'

  export let segment;
  
  const client = getClient()

  console.log(client)

  const logout = async () => {
    try {

        const res = await mutate(client, {
            mutation: EGRESA
        });
        console.log(res)
        console.log(res.data)
        client.resetStore()
        document.cookie = "keystone.sid=; Max-Age=-999999";
        goto('/ingreso')

    } catch(error) {
        console.log(error)
    }
    
  }
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class='{segment === undefined ? "selected" : ""}' href=".">home</a>
    </li>

    <!-- for the albums link, we're using rel=prefetch so that Sapper prefetches
		     the albums data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class='{segment === "albums" ? "selected" : ""}'
        href="albums"
      >
        albums
      </a>
    </li>
    <li>
      <button on:click={logout}>Salir</button>
    </li>
  </ul>
</nav>
