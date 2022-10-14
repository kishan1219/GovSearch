import React from 'react'
import { Sidebar } from '../../components/shared'
import Styles from './home.module.scss'
const Home = () => {
  return (
    <div className={Styles.container}>
      <Sidebar />
    </div>
  )
}


export default Home