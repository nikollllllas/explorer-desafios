import { BackgroundImage, Container, Form } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <BackgroundImage />
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para gerenciar e salvar seus links úteis.</p>

        <h2>Crie sua conta</h2>
        
        <Input 
          placeholder={'Nome'}
          type={'text'}
          icon={FiUser}
          />

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
          title={'Cadastrar'} />

        <Link to='/'>Voltar para o Login</Link>
      </Form>
    </Container>
  )
}