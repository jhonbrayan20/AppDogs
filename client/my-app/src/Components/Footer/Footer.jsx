import React from 'react'
import {BsGithub } from "react-icons/bs"
import { BsLinkedin } from 'react-icons/bs'
import {BsFillSuitHeartFill } from "react-icons/bs"
import styles from "./Footer.module.css"

function Footer() {
  return (
  <div>
        <div className={styles.footer}>
    <p>Desarrollado de  <BsFillSuitHeartFill className={styles.heart}/> por Jhon Brayan</p>
        </div>
    <div className={styles.links}>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/jhon-brayan-huanacuni-condori-6aa298267/'><BsLinkedin style={{color:"#FF9741",width:"50px",height:"30px"}} /></a>  
        <a target='_blank' rel="noreferrer" href='https://github.com/jhonbrayan20'><BsGithub style={{color:"#FF9741",width:"50px", height:"30px"}}/></a>
    </div>
</div>
  )
}

export default Footer
