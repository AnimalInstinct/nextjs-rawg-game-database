import styled from 'styled-components'
import {paginate} from '../../helpers/paginate'
import { device } from '../../helpers/device'
import Link from 'next/link'

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 20px 2em; 
  @media ${device.mobileS} {
    padding: 10px 0;
    font-size: 0.7em;
    margin: auto;
  }
`

const Page = styled.div`
  color: white;
  cursor: pointer;
  border: 1px solid white;
  margin 1px;
  @media ${device.mobileS} {
    padding: 5px;
  }
  @media ${device.tablet} {
    padding: 10px;
  }
`

const Pagination = ({ count, pageSize, next, current }) => {
  const totalPages = Math.round(count/pageSize)
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
