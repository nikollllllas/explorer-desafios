import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Brand, Container, Content, Menu, NewNote, Search } from './styles.js'
import { Input } from '../../components/Input/index.jsx'

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
        <Input placeholder={'Pesquisar pelo título'} icon={FiSearch} />
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