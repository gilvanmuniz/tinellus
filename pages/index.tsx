import Head from 'next/head'
import Menu from './../components/navegation.jsx'
const styles = require ('../styles/Home.module.scss')

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Tinéllus Serviços Digitais
        </h1>     
       <h6>Site em construção</h6>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/tinellus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logomarca020.jpg" alt="Tinéllus Serviços Digitais" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
