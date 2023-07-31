import React from 'react'
import styles from './Dash.module.css';
const Dashboard = () => {
  return (
    <section  className={styles.dash}>
        <div className={styles.content}>
            <div className={styles.image}>
                <img src='star_warsimage.png' alt='' className={styles.img}/> 
            </div>
            <h1 className={styles.heading}>Welcome to Star Wars <br/> Dashboard</h1>
            <p className={styles.para}>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
        </div>
    </section>
  )
}

export default Dashboard