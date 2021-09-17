import React from 'react'
import styles from './Header.module.css'
import logo from './LOGO HE VINCI.png'

const Header = (props) => {
    return (
      <>
        <img src={logo} alt="logo Vinci" />
        <h1 className={styles.header}>{props.course}</h1>
      </>
    )
}

export default Header