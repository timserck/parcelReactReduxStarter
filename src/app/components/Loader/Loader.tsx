import React from 'react'

import './Loader.scss'

type Props = {
  message?: string
}

export default function Loader (props: Props) {

  return (
    <div className={`loader`}>
        {props.message}
    </div>
  )
}

Loader.defaultProps = {

    message: 'test'
}