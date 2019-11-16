
<script>

  import Input from './../../Auth/Input.svelte'
  import Button from './../../Auth/Button.svelte'
  import { toast as savedToast } from './../../../store'

  let email, password = ''

  const toast = t => savedToast.set(t)

  const errToast = msg => toast({
    name: msg,
    seconds: 4,
    type: 'error'
  })

  const tooBig = name => name.length > 50

  const create = () => {
    if (!email || !password)
      errToast('Por favor preencha todos os campos.')
    else if (tooBig(email) || tooBig(password))
      errToast('O número máximo de caracteres é 50.')
    else {
      // login
    }
  }

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
      <Input placeholder="Password:" type="password" value="" on:input={({detail}) => password = detail}/>
    </div>
    <div class="margin tac" style="margin-bottom: 10px">
      <Button on:click={create}>Entrar</Button>
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
