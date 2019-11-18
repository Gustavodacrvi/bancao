
<script>

  import Input from './../../Auth/Input.svelte'
  import Button from './../../Auth/Button.svelte'
  import axios from 'axios'
  import { toast as savedToast } from './../../../store'

  let email, username, password, confirm = ''

  const toast = t => savedToast.set(t)

  const errToast = msg => toast({
    name: msg,
    seconds: 4,
    type: 'error'
  })

  const tooBig = name => name.length > 50

  const create = () => {
    if (!email || !username || !password || !confirm)
      errToast('Por favor preencha todos os campos.')
    else if (tooBig(email) || tooBig(username) || tooBig(password) || tooBig(confirm))
      errToast('O número máximo de caracteres é 50.')
    else if (password !== confirm) {
      errToast('As senhas não batem.')
    } else {
      axios.post('/users/signup', {email, name: username, password}).then(res => {
        if (res.status === 200) toast({
          name: 'Você consegui seu merda!',
          seconds: 4,
          type: 'success',
        })
      }).catch(err => errToast("Cocô"))
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
      <Input placeholder="Username:" type="text" value="" on:input={({detail}) => username = detail}/>
    </div>
    <div class="margin">
      <Input placeholder="Password:" type="password" value="" on:input={({detail}) => password = detail}/>
    </div>
    <div class="margin">
      <Input placeholder="Confirm:" type="password" value="" on:input={({detail}) => confirm = detail}/>
    </div>
    <div class="margin tac" style="margin-bottom: 10px">
      <Button on:click={create}>Criar conta</Button>
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
