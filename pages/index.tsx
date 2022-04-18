import Head from 'next/head'
import Footer from '@components/footer'
import Header from '@components/header'
import TaskAddingForm from '@components/taskAddingForm/index'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zoneminder</title>
      </Head>

      <Header></Header>

      <main className={styles.main}>
      <TaskAddingForm />
      </main>

      <Footer></Footer>
    </>
  )
}

