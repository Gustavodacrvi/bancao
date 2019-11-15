
<script>

  import { popup } from './../../store'
  import { fade } from 'svelte/transition'

  let currentPopup = null

  const unsub = popup.subscribe(v => currentPopup = v)
  const closePopup = () => popup.set(null)

</script>

{#if $popup}
  <div class="Popup" transition:fade="{{duration: 200}}" on:click={closePopup}>
    <div class="content">
      {$popup.comp}
    </div>
  </div>
{/if}

<style>

.Popup {
  background-color: rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  flex-basis: 300px;
  height: 400px;
}

</style>
