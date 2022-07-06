import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardComponent from "../src/components/CardComponent";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Country Quiz</title>
                <meta name="description" content="Country Quiz developed by María Celeste Dubini with Next.js, challenge found in devchallenges.io"/>
                <link rel="icon" href="/world-icon.png"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.mainContainer}>
                    <h1 className={styles.title}>
                        Country Quiz
                    </h1>
                    <CardComponent></CardComponent>
                </div>

            </main>

            <footer className={styles.footer}>
                created by <a href="https://github.com/celestedubini" target="_blank" rel="noreferrer">celestedubini</a>- <a href="https://devChallenges.io" target="_blank" rel="noreferrer">devChallenges.io</a>
            </footer>
        </div>
    )
}

export default Home
