import css from './Header.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={css.header}>
            <a href="/profile"> <img
                src="logo192.png"
                alt="home"/>
            </a>
            <div className={css.login}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.LogoutThunk}>Logout</button>
                    </div>
                    : <NavLink to={`/login`}>Login</NavLink>
                }

            </div>

        </header>
    )
}
