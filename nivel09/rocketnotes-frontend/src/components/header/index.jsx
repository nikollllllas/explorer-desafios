import { RiShutDownLine } from 'react-icons/ri'
import { Container, Logout, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src='https://github.com/nikollllllas.png' alt='Nikollas photo' />
        <div>
          <span>Bem vindo, </span>
          <strong>Nikollas Ohta!</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
