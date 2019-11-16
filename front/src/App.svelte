
<script>

  import NavBar from './components/Navigation/NavBar.svelte'
  import Popup from './components/Popup/Popup.svelte'
  import Toast from './components/Toast.svelte'

  import Router from 'svelte-spa-router'

  import routes from './router.js'
  
</script>

<style>

</style>

<Popup/>
<Toast/>

<NavBar/>
<Router {routes}/>
