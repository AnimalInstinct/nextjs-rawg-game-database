import Head from 'next/head'
import GamesList from '../components/GamesList/GamesList'
import GamesFilter from '../components/GamesList/GamesFilter'
import Pagination from '../components/Shared/Pagination'
import styled from 'styled-components'
import { device } from '../helpers/device'
import * as api from '../api/games'

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

export default function Home({ games, platforms, query }) {
  const { count, next } = games
  const { page, page_size: pageSize } = query

  return (
    <Container>
      <Head>
        <title>RAWG Games</title>
        <link rel='icon' href='/gamepad.ico' />
      </Head>
      <main>
        <Pagination
          count={count}
          pageSize={pageSize}
          next={next}
          current={page}
        />
        <GamesFilter platforms={platforms} query={query} />
        <GamesList games={games} />
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
