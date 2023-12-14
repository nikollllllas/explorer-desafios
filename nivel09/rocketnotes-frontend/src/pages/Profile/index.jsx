import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Avatar, Container, Form } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() { 
  return (
    <Container>
      <header >
        <a href='#'>
          <FiArrowLeft />
        </a>
      </header>
      <Form>
        <Avatar>
          <img 
            src='https://github.com/nikollllllas.png'
            alt='Foto do Usuário'
          />
          <label htmlFor=''>
            <FiCamera />
            <input
              id='avatar'
              type='file'
            />
          </label>
        </Avatar>
        <Input
          type='text'
          placeholder='Nome'
          icon={FiUser}
        />
        <Input
          type='text'
          placeholder='E-mail'
          icon={FiMail}
        />
        <Input
          type='password'
          placeholder='Senha atual'
          icon={FiLock}
        />
        <Input
          type='password'
          placeholder='Nova senha'
          icon={FiLock}
        />
        <Button 
          title='Salvar'
        />
      </Form>
    </Container>
  )
}