import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './NewRoutes';
import s from './Header.module.css'

function Header() {
    return (

    <div className={s.slide_container}>
        <div className={s.slide}>
            <div className={s.slide_content}>
                <li><NavLink className={(navData)=> navData.isActive ? s.active : s.link_text } to={PATH.PRE_JUNIOR}>pre-junior</NavLink></li>
                <li><NavLink className={(navData)=> navData.isActive ? s.active : s.link_text } to={PATH.JUNIOR}>junior</NavLink></li>
                <li><NavLink className={(navData)=> navData.isActive ? s.active : s.link_text } to={PATH.JUNIOR_PLUS}>junior+</NavLink></li>
            </div>
            <div className={s.slide_header}>Menu</div>
        </div>
    </div>
    )
}

export default Header
