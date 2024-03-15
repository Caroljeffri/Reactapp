import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className="page-not-found">
        <h1>
            404 PAGE NOT FOUND
        </h1>
        <h2> <Link to="/portal/home"> Back to Homepage </Link> </h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgf-oVirs5NYsveTZKydljQblv_6V6wMUAw&usqp=CAU"/>
    </div>
  )
}
