import css from './Profile.module.css';
import React from 'react'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import Preloader from "../../assets/image/Preloader";


export const Profile = React.memo((props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={css.content}>
            <div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <img className={css.userAvatar}
                    src={props.profile.photos.small != null ? props.profile.photos.small : "https://ubisoft-avatars.akamaized.net/17482820-40aa-46fe-9dd9-fa46f044ea6d/default_146_146.png?appId=6ad16abe-8f32-406b-991b-450febe95823"}
                    alt=""/>
                <div><a href={props.profile.contacts.vk}><img className={css.contacts}
                                                              src="https://cdn4.iconfinder.com/data/icons/social-media-line-3/64/Social-media-expand_VK-512.png"
                                                              alt=""/></a>
                </div>
            </div>

            <div>

                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
})