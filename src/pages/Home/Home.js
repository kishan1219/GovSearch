import React from 'react'
import { Layout, Sidebar } from '../../components/shared'
import Styles from './home.module.scss'
const Home = () => {
  return (
    <Layout className={Styles.container}>
      <Sidebar />
    </Layout>
  )
}


export default Home