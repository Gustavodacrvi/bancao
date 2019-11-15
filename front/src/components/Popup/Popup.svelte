
<script>

  import { popup } from './../../store'

  let currentPopup = null

  const unsub = popup.subscribe(v => currentPopup = v)

</script>

<div class="Popup">
  {#if $popup}
  <div class="content">
    {$popup.comp}
  </div>
  {/if}
</div>

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
  pointer-events: none;
}

.content {
  flex-basis: 300px;
  height: 400px;
}

</style>
