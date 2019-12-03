import React from 'react'

export const User = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.website}</td>
    </tr>
  )
}
