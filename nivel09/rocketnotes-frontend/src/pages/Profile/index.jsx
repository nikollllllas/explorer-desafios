import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Avatar, Container, Form } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() {
  const { user } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='text'
          placeholder='E-mail'
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Senha atual'
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Nova senha'
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title='Salvar' />
      </Form>
    </Container>
  )
}
