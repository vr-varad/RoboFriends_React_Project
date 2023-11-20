// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card  from './Card'

// eslint-disable-next-line react/prop-types
const CardList = ({robots}) => {
  // if(true){
  //   throw new Error('hello ji')
  // }
  return (
    <div>
      {robots.map(
        (robot,i)=>{return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
  })}
    </div>
  )
}

export default CardList
