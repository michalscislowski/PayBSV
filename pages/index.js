import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Main from '../components/main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PayBSV</title>
        <link rel="icon" href="/bsvlogo.svg" />
      </Head>
      <Header />
      <Main />

    </div>
  )
}
