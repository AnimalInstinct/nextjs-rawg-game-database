import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { buildQuery } from '../../helpers/query'
import { useRouter } from 'next/router'

import * as api from '../../api/games'

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`

const GamesFilter = ({ platforms, query }) => {
  const router = useRouter()
  const sortBy = ['rating', 'released']

  const initFilter = {
    page: null,
    search: '',
    platforms: '',
    ordering: '',
    asc: true,
  }

  const [filter, setFilter] = useState(initFilter)

  useEffect(() => {
    const newFilter = { ...filter }
    console.log(query)
    Object.keys(query).forEach((key) => {
      newFilter[key] = query[key]
    })
    setFilter(newFilter)
  }, [query])

  const filterChangeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
  }

  const filterPlatformHandler = (e) => {
    const selectedId = e.target.childNodes[e.target.selectedIndex].getAttribute(
      'id'
    )
    setFilter({ ...filter, platforms: selectedId })
  }

  const directionHandler = (e) => {
    const asc = !filter.asc
    const direction = asc ? '' : '-'
    while (filter.ordering.charAt(0) == '-')
      filter.ordering = filter.ordering.substr(1)
    const newOrdering = direction + filter.ordering
    setFilter({
      ...filter,
      asc: !filter.asc,
      ordering: newOrdering,
    })
  }

  const filterOrderingHandler = (e) => {
    const direction = filter.asc ? '' : '-'
    setFilter({
      ...filter,
      [e.target.name]: `${direction}${e.target.value}`,
    })
  }

  const submitHandler = (e) => {
    const query = buildQuery(filter)
    console.log(query)
    router.push(query)
    e.preventDefault()
  }

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <input
          name='search'
          type='text'
          value={filter.search}
          onChange={filterChangeHandler}
        />
        <select
          name='platform'
          value={filter.platforms}
          onChange={filterPlatformHandler}
        >
          <option></option>
          {platforms.results.map((platform) => (
            <option value={platform.id} key={platform.id} id={platform.id}>
              {platform.name}
            </option>
          ))}
        </select>
        <select
          name='ordering'
          value={filter.ordering}
          onChange={filterOrderingHandler}
        >
          <option></option>
          {sortBy.map((param) => (
            <option key={param}>{param}</option>
          ))}
        </select>
        <span onClick={directionHandler}>{filter.asc ? 'ASC' : 'DESC'}</span>
        <button type='submit'>Filter</button>
      </form>
    </Wrapper>
  )
}

export default GamesFilter
