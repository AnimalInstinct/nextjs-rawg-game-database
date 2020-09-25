import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { buildQuery } from '../../helpers/query'
import { useRouter } from 'next/router'

import * as api from '../../api/games'

const Wrapper = styled.div`
  padding: 2em;
 
`

const Form = styled.form`
display: flex;
flex-wrap: nowrap;
width: 100%;
`

const Search = styled.input`
  width: 150px;
  height: 29px;
  line-height: 30px;
  font-size: 14px;
  padding: 0 10px;
  color: #151515;
  border: 0;
  &:focus{
    outline: none;
  }
`

const Platform = styled.select`
  min-width: 100px;
  height: 29px;
  outline: 0;
  border: none;
  border-left: 1px solid #adadad;
  cursor: pointer;
`

const Ordering = styled.select`
  min-width: 150px;
  height: 29px;
  outline: 0;
  border: none;
  border-left: 1px solid #adadad;
  cursor: pointer;
  
`

const Direction = styled.button`
  width: 150px;
  height: 29px;
  border: none;
  cursor: pointer;
  line-height: 20px;
`

const SearchButton = styled.button`
  width: 150px;
  background-color: #007701;
  border: 1px solid white;
  color: white;
  height: 29px;
  cursor: pointer;
  padding: 0 20px;
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
      <Form onSubmit={submitHandler}>
        <Search
          name='search'
          type='text'
          placeholder="Search"
          value={filter.search}
          onChange={filterChangeHandler}
        />
        <Platform
          name='platform'
          value={filter.platforms}
          onChange={filterPlatformHandler}
        >
          <option>Choose platform</option>
          {platforms.results.map((platform) => (
            <option value={platform.id} key={platform.id} id={platform.id}>
              {platform.name}
            </option>
          ))}
        </Platform>
        <Ordering
          name='ordering'
          value={filter.ordering}
          onChange={filterOrderingHandler}
        >
          <option>Ordering</option>
          {sortBy.map((param) => (
            <option key={param}>{param}</option>
          ))}
        </Ordering>
        <Direction onClick={directionHandler}>{filter.asc ? 'ASC' : 'DESC'}</Direction>
        <SearchButton type='submit'>Filter</SearchButton>
      </Form>
    </Wrapper>
  )
}

export default GamesFilter
