import { useContext } from 'react'
import { MyContext } from '../../myContext'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { BackgroundImage, Container, Form } from './styles'

export function SignIn() {
  const data = useContext(MyContext)
  console.log(data)
  
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

        <Link to='/register'>Criar conta</Link>
      </Form>
      <BackgroundImage />
    </Container>
  )
}