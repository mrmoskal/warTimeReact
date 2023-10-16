import React from 'react'
import Ticket from '../Ticket/Ticket'
import styles from "./Tickets.module.css"

export default function Tickets({persons}) {
  return (
    <div>
        <h1 className={styles.title}>Tickets</h1>
        {persons.map(person => {
            return <Ticket  ticket={person}/>
        })}
    </div>
  )
}
