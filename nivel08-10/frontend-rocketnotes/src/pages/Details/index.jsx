import { Container, Content, Links } from './styles'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { ButtonText } from '../../components/buttontext'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title='Excluir nota' />
          <h1>Título da Nota</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore non
            odit, enim sint, placeat excepturi quas obcaecati, ea corporis
            mollitia at voluptates rerum maiores! Maiores sint reiciendis
            ratione autem. Quos. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. At aut aliquam, veritatis eos accusantium fugiat!
            Dolor porro deleniti eos nobis. Voluptate accusantium odio sunt quos
            error nihil quas libero fuga. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Numquam, eius quisquam omnis eaque
            inventore voluptate. Est, cupiditate eveniet amet quia corporis
            nostrum eum quod aspernatur sed alias molestias sapiente tempora?
          </p>
          <Section title={'Links úteis'}>
            <Links>
              <li>
                <a href='#'>Link 1</a>
              </li>
              <li>
                <a href='#'>Link 2</a>
              </li>
              <li>
                <a href='#'>Link 3</a>
              </li>
            </Links>
          </Section>
          <Section title={'Tags'}>
            <Tag title={'Node'} />
            <Tag title={'Express'} />
          </Section>
          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  )
}
