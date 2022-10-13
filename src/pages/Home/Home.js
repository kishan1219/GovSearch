import React from 'react'
import { Search, Sidebar } from '../../components/shared'
import Styles from './home.module.scss'
 const Home = () => {
  return (
    <div>
    <div className={Styles.search}><Search /> </div>
    <Sidebar /> 
    </div>
  )
}


export default Home