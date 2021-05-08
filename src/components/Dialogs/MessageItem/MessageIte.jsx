import css from "../Dialogs.module.css";
import React from 'react'
export const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}