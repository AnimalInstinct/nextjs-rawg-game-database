import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {paginate} from '../../helpers/paginate'
import Link from 'next/link'


const Wrapper = styled.div`
  padding: 2em;
  display: flex;
  width:100%;
`

const Page = styled.div`
  color: white;
  cursor: pointer;
  padding: 10px;
  border: 1px solid white;
  margin 1px;
`

const Pagination = ({ count, pageSize, next, current }) => {
  const totalPages = Math.round(count/pageSize)

  console.log('Count:', count)
  console.log('Page Size:', pageSize)
  console.log('Next:', next)
  console.log('Current:', current)
  console.log('Pages:', totalPages)

  const pagination = paginate(totalPages, current, 5)

  return (
    <Wrapper>
      <Link href={`?page=${current-1}&page_size=${pageSize}`}><Page>Prev</Page></Link>
      {pagination.map(page => <Link key={page} href={`?page=${page}&page_size=${pageSize}`}><Page>{page}</Page></Link>)}
      <Link href={`?page=${current+1}&page_size=${pageSize}`}><Page>Next</Page></Link>
    </Wrapper>
  )
}

export default Pagination
