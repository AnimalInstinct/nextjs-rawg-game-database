import React, {useState, useEffect} from 'react';
import GamesItem from './GamesListItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2em;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  width:100%;
  flex-wrap: wrap;
`

const GamesList = ({ games }) => {
  return (
    <Wrapper>
      {games.results
        ? games.results.map((game) => <GamesItem key={game.id} game={game} />)
        : 'LOADING...'}
    </Wrapper>
  )
}

export default GamesList
