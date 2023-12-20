import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'

import { Container, Form } from './styles'

export function New() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to='/'>voltar</Link>
            </header>

            <Input placeholder='Titulo' />

            <Textarea placeholder={'Observações'} />

            <Section title='Links úteis'>
              <NoteItem value={'https://www.google.com.br'} />

              <NoteItem
                value={''}
                isNew
                placeholder='Novo link'
              />
            </Section>

            <Section title='Marcadores'>
              <div className='tags'>
                <NoteItem value='Node' />
                <NoteItem
                  isNew
                  placeholder='Novo marcador'
                />
              </div>
            </Section>

            <Button title={'Salvar'} />
          </Form>
        </main>
      </Container>
    </>
  )
}
