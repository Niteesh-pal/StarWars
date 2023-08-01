import React from 'react'
import './header.css';


const Header = () => {
    return (
        <div className='container'>
            <div className='image'>
                <img src='star wars.png' alt='' style={{width:"6rem", height:"3rem",padding:"20px"}}></img>
            </div>
            <div className='SearchBar'>
                
                <input type='search' placeholder='search'/>
            </div>
        </div>
    )
}

export default Header