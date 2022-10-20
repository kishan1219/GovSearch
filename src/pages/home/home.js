import React from 'react'
import { Layout } from '../../components/shared'
import Styles from './home.module.scss'

const Home = () => {
    return (
        <Layout>
            <div className={Styles.container}>
                <h1>Home</h1>
            </div>
        </Layout>
    )
}


export default Home