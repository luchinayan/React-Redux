import React from 'react'
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../../assets/Paginator/Paginator";
import {UsersType} from "../../types/Types";

type PropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UsersType>,
    followingProgress: boolean,
    unfollowThunk: (UserId: number) => void,
    followThunk: (UserId: number) => void,

}
 export const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {users.map(u =>
            <div className={css.main} key={u.id}>
                <span>
                        <NavLink to={`/profile/${u.id}`}>
                            <img
                                src={u.id % 2
                                    ? u.photos.small
                                    : u.photos.large}
                                className={css.photo} alt=""/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress} className={css.bouncy} onClick={() => {

                                    props.unfollowThunk(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingProgress} className={css.bouncy} onClick={() => {
                                    props.followThunk(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                    <div className={css.name}>
                        {u.name}
                    </div>
                    <div>{u.status}</div>
                 </span>
                <span className={css.location}>
                    <div>
                        {'u.location.city'}
                    </div>
                    <div>
                        {'u.location.country'}
                </div>
                </span>
            </div>)}
    </div>
}

