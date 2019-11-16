
<script>

  import Input from './../../Auth/Input.svelte'
  import Button from './../../Auth/Button.svelte'

  let email, username, password, confirm = ''

</script>

<div class="Signup card rb shadow" on:click|stopPropagation>
  <div class="tac">
    <h3>Criar uma conta!</h3>
  </div>
  <div class="cont">
    <div class="margin">
      <Input placeholder="E-mail:" type="text" value="" on:input={({detail}) => email = detail}/>
    </div>
    <div class="margin">
      <Input placeholder="Username:" type="text" value="" on:input={({detail}) => username = detail}/>
    </div>
    <div class="margin">
      <Input placeholder="Password:" type="password" value="" on:input={({detail}) => password = detail}/>
    </div>
    <div class="margin">
      <Input placeholder="Confirm:" type="password" value="" on:input={({detail}) => confirm = detail}/>
    </div>
    <div class="margin tac" style="margin-bottom: 10px">
      <Button>Criar conta</Button>
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
