
<script>

  import Input from './../../Auth/Input.svelte'
  import Button from './../../Auth/Button.svelte'
  import axios from 'axios'
  import { toast as savedToast, popup } from './../../../store'

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
      axios.post('/users/login', {
        email, password
      }).then(res => {
        if (!res.data.error) {
          toast({
            name: 'Parabéns seu merda!',
            seconds: 4,
            type: 'success',
          })
          console.log(res.data)
        }
        else errToast('DIE!!!!!')
      }).catch(err => errToast('Freaking erro'))
    }
  }
  const signup = () => popup.set({comp: 'Signup'})

</script>

<div class="Signup card rb shadow" on:click|stopPropagation>
  <div class="tac">
    <h3>Entrar</h3>
  </div>
  <div class="cont">
    <div class="margin">
      <Input placeholder="E-mail:" type="text" value="" on:input={({detail}) => email = detail}/>
    </div>
    <div class="margin">
      <Input placeholder="Password:" type="password" value="" on:input={({detail}) => password = detail}/>
    </div>
    <span>Não tem uma conta? <span class="false-link" on:click|stopPropagation={signup}>Inscreva-se</span>.</span>
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

.false-link {
  color: var(--blue);
  cursor: pointer;
}

.false-link:hover {
  text-decoration: underline;
}

</style>
