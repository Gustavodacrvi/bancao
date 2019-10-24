
<script>

  import Router, { location } from 'svelte-spa-router'
  import routes from './router.js'

  export let name
  
</script>

<style>
	h1 {
		color: purple
	}
</style>

<h1>Hello {$location}!</h1>

<Router {routes}/>
