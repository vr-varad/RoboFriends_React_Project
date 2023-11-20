// eslint-disable-next-line no-unused-vars
import React from 'react'

const Scroll = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className='overflow-y-scroll h-[500px] '>{props.children}</div>
  )
}

export default Scroll
