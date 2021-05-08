import css from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from 'react'

export const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={css.dialog}>
            <div><img src={props.avatarURL} alt=""/></div>
            <NavLink className={css.link} to={path}> {props.name} </NavLink>
        </div>)
}