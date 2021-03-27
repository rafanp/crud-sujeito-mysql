import Entries from '@/components/entries'
import Link from 'next/link'

import { useUsers } from '@/lib/swr-hooks'
import { Main, Content, Button } from './../styles/home'

const IndexPage = () => {
  const { users } = useUsers()

  return (
    <>
      <Main>
        <Content>
          <Link href={'/newUser'}>
            <Button>Criar</Button>
          </Link>
          <Entries entries={users} />
        </Content>
      </Main>
    </>
  )
}

export default IndexPage;