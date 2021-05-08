import css from './NavBar.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

export class NavBar extends React.Component {
    render() {
        return (
            <nav className={css.nav}>
                <div><NavLink to={`/profile`} className={`${css.link}`} activeClassName = {css.active}>Profile</NavLink></div>
                <div><NavLink to={`/dialogs`} className={`${css.link}`} activeClassName = {css.active}>Messages</NavLink></div>
                <div><NavLink to={`/news`} className={`${css.link}`} activeClassName = {css.active}>News</NavLink></div>
                <div><NavLink to={`/music`} className={`${css.link}`} activeClassName = {css.active}>Music</NavLink></div>
                <div><NavLink to={`/settings`} className={`${css.link}`} activeClassName = {css.active}>Settings</NavLink></div>
                <div><NavLink to={`/users`} className={`${css.link}`} activeClassName = {css.active}>Users</NavLink></div>

                {/*<div className={css.friends}><img src="https://muz-tv.ru/storage/pic/2/5/25e55fa966491ae9ef93fc291186c208.jpg" alt=""/></div>*/}
                {/*<div className={css.friends}><img src="https://salvemusic.com.ua/wp-content/uploads/2019/08/travis-scott.jpg" alt=""/></div>*/}
            </nav>
        )
    }


}