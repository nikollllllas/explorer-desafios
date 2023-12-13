import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Brand, Container, Content, Menu, NewNote, Search } from './styles.js'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      
      <Menu>
        <li>
          <ButtonText title='Todos' $isactive/>
        </li>
        <li>
          <ButtonText title='Python' />
        </li>
        <li>
          <ButtonText title='Ruby' />
        </li>
        <li>
          <ButtonText title='Node' />
        </li>
      </Menu>

      <Search>
        <input type='text' placeholder='Pesquisar' />
      </Search>

      <Content>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}