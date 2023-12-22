import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'

import { Container, Form } from './styles'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) =>
      prevState.filter((link, index) => index !== deleted)
    )
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

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
              {links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => {
                    handleRemoveLink(index)
                  }}
                />
              ))}
              <NoteItem
                isNew
                value={newLink}
                placeholder='Novo link'
                onChange={(e) => setNewLink(e.target.value)}
                onClick={handleAddLink}
              />
            </Section>

            <Section title='Marcadores'>
              <div className='tags'>
                {tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => { }}
                  />
                ))}
                <NoteItem
                  isNew
                  value={newTag}
                  placeholder='Novo marcador'
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
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
