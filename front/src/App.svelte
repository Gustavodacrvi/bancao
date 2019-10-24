
<script>

  import NavBar from './components/Navigation/NavBar.svelte'

  import Router from 'svelte-spa-router'

  import routes from './router.js'
  
</script>

<style>

</style>

<NavBar/>

<Router {routes}/>
