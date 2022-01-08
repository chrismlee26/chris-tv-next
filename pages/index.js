import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>chris tv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <NavBar />

      {/* Results */}
    </div>
  )
}
