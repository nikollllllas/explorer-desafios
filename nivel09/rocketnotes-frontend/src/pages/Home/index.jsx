import { FiPlus, FiSearch } from 'react-icons/fi'

import { Brand, Container, Content, Menu, NewNote, Search } from './styles.js'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title='Todos'
            $isactive
          />
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
        <Input
          placeholder={'Pesquisar pelo título'}
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title={'Minhas notas'}>
          <Note
            data={{
              title: 'React',
              tags: [
                {
                  id: '1',
                  name: 'react'
                },
                {
                  id: '2',
                  name: 'javascript'
                }
              ]
            }}
          />
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
