
<script>

  import { toast } from './../store'
  import { fade } from 'svelte/transition'

  const unsub = toast.subscribe(() => {})

  $: {
    $toast;
    setTimeout(() => {
      if ($toast && $toast.seconds)
        setTimeout(() => toast.set(null), $toast.seconds * 1000)
    })
  }
  

</script>

{#if $toast}
  <div class="Toast card rb shadow" transition:fade="{{duration: 200}}">
    <span>{$toast.name}</span>
  </div>
{/if}

<style>

.Toast {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,-50px);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.error {
  border: 2px solid var(--red);
}

.success {
  border: 2px solid var(--green);
}

.warning {
  border: 2px solid var(--yellow);
}

</style>
