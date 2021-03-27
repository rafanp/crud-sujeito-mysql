import { useState } from 'react'
import Router from 'next/router'
import { Main, Content, Button, TextInput } from './../styles/newUser'

export default function IndexPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const onSave = async () => {
        console.log("save")
        try {
            const res = await fetch('/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
            })
            setSubmitting(false)
            const json = await res.json()
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </TextInput>

                    <TextInput>
                        <p>Email:</p>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </TextInput>

                    <Button
                        disabled={submitting}
                        onClick={onSave}
                    >
                        {submitting ? 'Salvando ...' : 'Salvar'}
                    </Button>
                </Content>

            </Main>

        </>
    )
}
