import React from 'react'
import css from './Post.module.css'


export const Post = (props) => {
    return (

        <div className={css.post}>
            <div>
                <img className={css.avatar}
                     src={props.avatarURL}
                     alt=""/>
            </div>
            <span>{props.text}</span>
        </div>


    )
}