// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({id,name,email}) => {
  return (
    <div key={id} className={`bg-cyan-300 text-center inline-block m-2 mt-5 ml-5 p-1 rounded-md shadow-md transform transition-transform duration-250 ease-out hover:scale-105 `}>
      <img src={`https://robohash.org/${id}?100x100`} alt="robots" />
      <div className='leading-5 my-5 '>
        <h2 className='font-bold text-xl'>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
