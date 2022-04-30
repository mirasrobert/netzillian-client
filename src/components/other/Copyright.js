import React from 'react'

const Copyright = () => {
  return (
    <p className='copyright'>
      Copyright © {process.env.REACT_APP_NAME} | DETA {new Date().getFullYear()}
      .
    </p>
  )
}

export default Copyright
