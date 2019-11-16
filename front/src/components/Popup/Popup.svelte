
<script>

  import { popup } from './../../store'
  import { fade } from 'svelte/transition'

  import Signup from './Auth/Signup.svelte'

  const components = {Signup}

  let currentPopup = null

  const unsub = popup.subscribe(v => currentPopup = v)
  const closePopup = () => popup.set(null)

</script>

{#if $popup}
  <div class="Popup" transition:fade="{{duration: 200}}" on:click={closePopup}>
    <svelte:component this={components[$popup.comp]}/>
  </div>
{/if}

<style>

.Popup {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

</style>
