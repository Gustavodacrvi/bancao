
<script>

  import Input from './../../Auth/Input.svelte'

</script>

<div class="Signup card rb shadow" on:click|stopPropagation>
  <div class="tac">
    <h3>Criar uma conta!</h3>
  </div>
  <div class="cont">
    <div class="margin">
      <Input placeholder="E-mail:" type="text" value="" on:input={console.log}/>
    </div>
    <div class="margin">
      <Input placeholder="Username:" type="text" value=""/>
    </div>
    <div class="margin">
      <Input placeholder="Password:" type="password" value=""/>
    </div>
    <div class="margin">
      <Input placeholder="Confirm:" type="password" value=""/>
    </div>
  </div>
</div>

<style>

.Signup {
  flex-basis: 500px;
  margin: 10px;
  margin-top: 100px;
}

.cont {
  margin: 0 32px;
}

.margin {
  margin-top: 8px;
}

</style>
