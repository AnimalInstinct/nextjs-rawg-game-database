import Head from 'next/head'
import GamesList from '../components/GamesList/gamesList'
import GamesFilter from '../components/GamesList/gamesFilter'
import * as api from '../api/games'

export default function Home({ games, platforms, query }) {
  return (
    <>
      <Head>
        <title>RAWG Games</title>
        <link rel='icon' href='/gamepad.ico' />
      </Head>
      <main>
        <GamesFilter platforms={platforms} query={query} />
        <GamesList games={games} />
      </main>
      <footer></footer>
    </>
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
