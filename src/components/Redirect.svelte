<script>
    import { goto } from '@sapper/app';
  	import { onMount } from 'svelte';
  
    export let route
    onMount(async () => {
		await goto(route)
	});
</script>