import Head from 'next/head'
import * as api from '../../api/games'
import styled from 'styled-components'
import Game from '../../components/Game/Game'

const Wrapper = styled.div`
  padding: 2em;
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
