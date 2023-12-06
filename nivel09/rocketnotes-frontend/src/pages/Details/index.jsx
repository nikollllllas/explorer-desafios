import { Container } from './styles'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Header } from '../../components/header'

export function Details() {
  return(
    <Container>
      <Header />
      <Section title={"Links úteis"}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </Section>
      <Button title='Voltar' />
    </Container>
  )
}
