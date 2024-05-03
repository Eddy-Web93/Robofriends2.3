import React from 'react'
import user from "../../assets/user.png"
import "./Cards.css"

const Cards = ({name, email, id}) => {
  return (
    <>
        <div className="card">
            <img src={`https://robohash.org/${id}?200x200`} alt="" className='card-img'/>
            <div className="details">
                <p className="name">{name}</p>
                <p className='email'>{email}</p>
            </div>
        </div>
    </>
  )
}

export default Cards