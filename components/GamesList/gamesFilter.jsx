import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { buildQuery } from '../../helpers/query'
import { useRouter } from 'next/router'
import { device } from '../../helpers/device'

const Wrapper = styled.div`
  padding: 10px;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Search = styled.input`
  height: 29px;
  line-height: 30px;
  font-size: 14px;
  padding: 0 10px;
  color: #151515;
  border: 0;
  &:focus{
    outline: none;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 150px;
  }
`

const Platform = styled.select`
  min-width: 100px;
  height: 29px;
  outline: 0;
  border: none;
  border-left: 1px solid #adadad;
  cursor: pointer;
  @media ${device.mobileS} {
    width: 100%;
    margin-top: 10px;
  }
  @media ${device.tablet} {
    width: 150px;
    margin-top: 0px;
  }
`

const Ordering = styled.select`
  min-width: 150px;
  height: 29px;
  outline: 0;
  border: none;
  border-left: 1px solid #adadad;
  cursor: pointer;
  @media ${device.mobileS} {
    width: 100%;
    margin-top: 10px;
  }
  @media ${device.tablet} {
    width: 150px;
    margin-top: 0px;
  }
`

const SearchButton = styled.button`
  width: 150px;
  background-color: #007701;
  border: 1px solid white;
  color: white;
  height: 29px;
  cursor: pointer;
  padding: 0 20px;
  @media ${device.mobileS} {
    width: 100%;
    margin: 10px auto; 
  }
  @media ${device.tablet} {
    width: 150px;
    margin: 0; 
  }
`

const GamesFilter = ({ platforms, query }) => {
  const router = useRouter()
  const sortBy = [{name:"Rating Low>Hight",query:'rating'},{name:"Rating Hight>Low",query:'-rating'},{name:"Released Late>New",query:'released'},{name:"Released New>Late",query:'-released'}]

  const initFilter = {
    page: null,
    search: '',
    platforms: '',
    ordering: '',
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

  const filterOrderingHandler = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    const query = buildQuery(filter)
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
          onChange={filterChangeHandler}
        />
        <Platform
          name='platform'
          onChange={filterPlatformHandler}
        >
          <option value="">Platform</option>
          {platforms.results.map((platform) => (
            <option value={platform.id} key={platform.id} id={platform.id}>
              {platform.name}
            </option>
          ))}
        </Platform>
        <Ordering
          name='ordering'
          onChange={filterOrderingHandler}
        >
          <option value="">Ordering</option>
          {sortBy.map((param) => (
            <option key={param.name} value={param.query}>{param.name}</option>
          ))}
        </Ordering>
        <SearchButton type='submit'>Filter</SearchButton>
      </Form>
    </Wrapper>
  )
}

export default GamesFilter
