
<script>

  import NavBar from './components/Navigation/NavBar.svelte'
  import Popup from './components/Popup/Popup.svelte'

  import Router from 'svelte-spa-router'

  import routes from './router.js'
  
</script>

<style>

</style>

<Popup/>

<NavBar/>
<Router {routes}/>
