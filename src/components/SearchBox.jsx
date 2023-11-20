// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const SearchBox = ({searchFeild}) => {
  return (
    <div>
      <input onChange={searchFeild} type="search" placeholder='Search Robots' className='mb-10 p-2 bg-green-200 border-blue-500 focus:outline-none focus:border-blue-500' />
    </div>
  )
}

export default SearchBox
