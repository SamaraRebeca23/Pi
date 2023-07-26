import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape(props) {
  return (

    <div className = {styles.Rodape}>
 
     <img className = {styles.logo} src={props.logo}/>
      <p className = {styles.Rodape}>{props.rodape}</p>
      
      </div>
  )
}
