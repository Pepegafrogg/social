import React from 'react'

export default function ProfileContact({ contactTitle, contactValue }) {
   return (
      <div style={{ paddingLeft: '10px', marginBottom: '5px' }}><b>{contactTitle}</b>: {contactValue}</div>
   )
}
