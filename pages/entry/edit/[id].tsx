import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { Main, Content, Button, TextInput } from '../../../styles/newUser'

export default function IndexPage() {
  const router = useRouter()
  const [newName, setName] = useState('')
  const [newEmail, setEmail] = useState('')
  const { id, name, email } = router.query
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (typeof name === 'string') {
      setName(name)
    }
    if (typeof email === 'string') {
      setEmail(email)
    }
  }, [name, email])
  
  const onSave = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/edit-entry', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name: newName,
          email: newEmail,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <>
      <Main>
        <Content>
          <TextInput>
            <p>Nome:</p>
            <input
              value={newName}
              onChange={(e) => setName(e.target.value)}
            />
          </TextInput>

          <TextInput>
            <p>Email:</p>
            <input
              value={newEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextInput>

          <Button
            disabled={submitting}
            onClick={onSave}
          >
            {submitting ? 'Salvando ...' : 'Editar'}
          </Button>
        </Content>

      </Main>

    </>
  )
}
