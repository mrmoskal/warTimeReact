import "./Ticket.module.css"
import styles from "./Ticket.module.css"
import React from 'react'

export default function Ticket({ticket}) {
  return (
    <div className={styles.content}>
        <p id={styles.ticketId}>Ticket id : {ticket.id}</p>
        <p id={styles.ticketFirstName}>First name : {ticket.firstName}</p>
        <p id={styles.ticketLastName}>Last name : {ticket.lastName}</p>
    </div>
  )
}


