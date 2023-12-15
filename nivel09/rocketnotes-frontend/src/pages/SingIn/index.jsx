import { BackgroundImage, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiLock, FiMail } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para gerenciar e salvar seus links úteis.</p>

        <h2>Realize o Login</h2>
        
        <Input 
          placeholder={'E-mail'}
          type={'text'}
          icon={FiMail}
          />
        
        <Input
          placeholder={'Senha'}
          type='password'
          icon={FiLock}
          />

        <Button
          title={'Entrar'} />

        <a href='#'>Criar conta</a>
      </Form>
      <BackgroundImage />
    </Container>
  )
}