import React from 'react'
import '../assets/styles/componets/Categories.css'

const Categories = (props) => {

    const { children, title } = props

    return(
        <div className="categories">
            <h2 className="categories-h2">{title}</h2>
            {children}
        </div>
    )
}

export default Categories