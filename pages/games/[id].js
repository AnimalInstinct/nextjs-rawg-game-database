import Head from 'next/head'
import * as api from '../api/games'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
`

export default function Post({ postData }) {
  return (
    <Layout>
      <Container>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <h1>{postData.title}</h1>
        <hr />
        <Date dateString={postData.date} />
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }
