import { Header } from '../../components/header/index.jsx'
import { Brand, Container, Content, Menu, NewNote, Search } from './styles.js'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      
      <Menu>
      </Menu>

      <Search>
        <input type='text' placeholder='Pesquisar' />
      </Search>

      <Content>
      </Content>

      <NewNote>
      </NewNote>
    </Container>
  )
}