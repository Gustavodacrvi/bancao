<script>

  import Button from '../components/Auth/Button.svelte'

</script>

<main class="Home">
  <div class="cont">
    <div class="text">
      <h1 class="margin">Tenha menos estresse no controle do seu dinheiro!</h1>
      <p class="margin">Tenha total controle sobre seus fornecedores, vendas e despasas com facilidade e sem se sobrecarregar.</p>
      <div class="margin">
        <Button class="margin">Começar a economizar!</Button>
      </div>
    </div>
    <div class="illus">
    </div>
  </div>
</main>

<style>

.Home {
  display: flex;
  justify-content: center;
}

.cont {
  flex-basis: 1005px;
  padding-top: 60px;
  display: flex;
}

.text {
  flex-basis: 100%;
}

.illus {
  flex-basis: 100%;
}

.margin {
  margin: 0;
  margin-top: 40px;
}

</style>
