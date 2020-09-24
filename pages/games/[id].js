import Head from 'next/head'
import * as api from '../../api/games'
import styled from 'styled-components'
import Game from '../../components/Game/Game'

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`

export default function GameDetails({ game, screenshots }) {
  return (
    <Wrapper>
      <Head>
        <title>{game.name}</title>
        <link rel='icon' href='/gamepad.ico' />
      </Head>
      <Game game={game} screenshots={screenshots} />
    </Wrapper>
  )
}

export async function getServerSideProps(context) {
  const game = await api.fetchGame(context)
  const screenshots = await api.fetchGameScreenshots(context)
  return {
    props: {
      game,
      screenshots,
    },
  }
}

// export async function getStaticPaths() {
//   // console.log(context.params)
//   // Return a list of possible value for id
//   const games = await api.fetchGames()
//   const test = await api.getGamesPaths(games)
//   console.log(test)
//   const paths = ['1', '2', '3']
//   return {
//     paths,
//     fallback: false,
//   }
// }
