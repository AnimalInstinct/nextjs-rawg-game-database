import React, { useEffect } from 'react'
import Head from 'next/head'
import GamesList from '../components/GamesList/GamesList'
import GamesFilter from '../components/GamesList/GamesFilter'
import Pagination from '../components/Shared/Pagination'
import styled from 'styled-components'
import { device } from '../helpers/device'
import * as api from '../api/games'
import { useRouter } from 'next/router'

const Container = styled.div`
  width: 100%;
  margin: auto;
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`

const Header = styled.div`
  padding: 0 2rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.textColor};
  @media ${device.mobileS} {
    font-size: 0.5em;
    padding: 0 10px;
  }
`

export default function Home({ games, platforms, query }) {
  const { count, next } = games
  const { page, page_size: pageSize } = query
  const router = useRouter()

  useEffect(() => {
    if (!(page || pageSize)) {
      router.push('?page=1&page_size=12')
    }
  }, [])

  return (
    <Container>
      <Head>
        <title>RAWG Games</title>
        <link rel='icon' href='/gamepad.ico' />
      </Head>
      <main>
        <Header>
          <h1>RAWG games database</h1>
        </Header>
        <GamesFilter platforms={platforms} query={query} />
        <GamesList games={games} />
        <Pagination
          count={count}
          pageSize={pageSize}
          next={next}
          current={page}
        />
      </main>
      <footer></footer>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const games = await api.fetchGames(context)
  const platforms = await api.fetchPlatforms(context)
  return {
    props: {
      games,
      platforms,
      query: context.query,
    },
  }
}
