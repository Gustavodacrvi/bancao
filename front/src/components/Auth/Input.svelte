
<script>
  export let type = 'text'
  export let value = ''
  export let placeholder

  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

</script>

<input class="input"
  value={value} type={type} placeholder={placeholder} on:input={v => dispatch('input', v.target.value)}
>

<style>

.input {
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: var(--back-color);
}

</style>
