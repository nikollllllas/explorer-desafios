import { Container, Links } from './styles'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Header } from '../../components/header'
import { Tag } from '../../components/tag'

export function Details() {
  return(
    <Container>
      <Header />
      <Section title={"Links úteis"}>
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </Links>
      </Section>
      <Section title={'Tags'}>
        <Tag title={'Node'}/>
        <Tag title={'Express'}/>
      </Section>
      <Button title='Voltar' />
    </Container>
  )
}
