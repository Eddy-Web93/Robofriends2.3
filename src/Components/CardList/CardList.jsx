import React from 'react'
import Cards from '../Cards/Cards'
import "./CardList.css"

const CardList = ({robots}) => {
    const CardComponents = robots.map((user,i) => <Cards key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> )

  return (
    <div className='displaying'>
        {CardComponents}
    </div>
  )
}

export default CardList