import GamesItem from './gamesListItem'
import styled from 'styled-components'
import useSWR from 'swr'

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`

const GamesList = ({ games }) => {
  return (
    <Wrapper>
      <h1>RAWG Games Database</h1>
      {games.results
        ? games.results.map((game) => <GamesItem key={game.id} game={game} />)
        : 'LOADING...'}
    </Wrapper>
  )
}

export default GamesList
