import css from './MyPosts.module.css';
import React from 'react'
import {Post} from "./Post/Post";


export const MyPosts = (props) => {
    const EventClick = (e) => {
        e.preventDefault()
        console.log(`u've clicked on the post`)
    }
    const postElement = props.posts.posts
        .map(p =>
            <Post key={p.text} text={p.text} avatarURL={p.avatarURL}/>
        )
    const newPostElement = React.createRef()

    const onInputChange = () => {
        let text = newPostElement.current.value
        props.updatePost(text)
    }

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (

        <div className={css.myPosts}>
            <div><textarea
                onChange={onInputChange}
                placeholder={`input`}
                value={props.newPostText}
                ref={newPostElement} cols="20" rows="3"/>
            </div>
            <div>
                <button onClick={addPost}>add Post</button>
            </div>
            <a href="https://google.com" onClick={EventClick}>click me </a>
            {postElement}

        </div>
    )
}