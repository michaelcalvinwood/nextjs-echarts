import React from 'react'

const page = ({params}) => {
    const { info } = params;
    
  return (
    <div>{info}</div>
  )
}

export default page