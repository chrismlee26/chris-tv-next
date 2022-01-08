import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>chris tv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  )
}

// Website is exported as props for instant rendering for client
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json());

  return {
    props: {
      requests: request.results,
    },
  }
}