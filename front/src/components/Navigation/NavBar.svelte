<script>

  import AppButton from './../Auth/Button.svelte'
  import { location, push } from 'svelte-spa-router'
  import { platform, popup } from './../../store'
  
  $: act = str => $location === str  

  const go = str => () => push(str)

  const popLogin = () => popup.set({comp: 'Signup'})

</script>

<nav class={[$platform, "NavBar"].join(' ')}>
  <div class="cont">
    <span class="logo">bancao bruh!</span>
    <div>
      <span class="link" class:active={act('/')} on:click={go('/')}>Início</span>
      <span class="link" class:active={act('/dash')} on:click={go('/dash')}>Dashboard</span>
      <span class="link" class:active={act('/profile')} on:click={go('/profile')}>Perfil</span>
      <span class="link" class:active={act('/contact')} on:click={go('/contact')}>Contato</span>
    </div>
    <AppButton on:click={popLogin}>Entrar</AppButton>
  </div>
</nav>

<style>

.NavBar {
  height: 50px;
  display: flex;
  justify-content: center;
}

.NavBar.desktop {
  margin-top: 50px;
}

.cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-basis: 1005px;
  transition-duration: .2s;
}

.logo {
  font-family: "Work Sans Bold";
  color: var(--green);
  font-size: 1.3em;
  margin: 0;
}

.link {
  margin: 0 6px;
  cursor: pointer;
  transition-duration: .2s;
  color: var(--light-gray);
}

.active {
  color: var(--gray);
}

.link:hover {
  color: var(--green);
}

</style>
