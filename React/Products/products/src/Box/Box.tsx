import React, { ReactNode } from 'react'
import './Box.scss'
// import styles from './Box.scss'

interface BoxProps{
    children: ReactNode;
}

function Box({children}:BoxProps) {
  return (
    <>
    <div className='mainDiv__productBox'>{children}</div>
    </>
  )
}

export default Box