import styled from 'styled-components'
import {paginate} from '../../helpers/paginate'
import { device } from '../../helpers/device'
import { useRouter } from 'next/router'
import { buildQuery } from '../../helpers/query'

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

const Pagination = ({ count, query }) => {
  const { page:current, page_size: pageSize } = query
  const totalPages = Math.round(count/pageSize)
  const pagination = paginate(totalPages, current, 5)
  const router = useRouter()


  const pageChangeHandler = (page, query) => {
    query.page = page
    const newQuery = buildQuery(query)
    router.push(newQuery)
  }

  return (
    <Wrapper>
      {pagination.map(page => <Page onClick={() => pageChangeHandler(page, query)}>{page}</Page>)}
    </Wrapper>
  )
}

export default Pagination
