import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    followThunk,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    unfollowThunk
} from "../../Redux/UsersReducer";
import {Users} from "./Users";
import Preloader from "../../assets/image/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelector";
import {UsersType} from "../../types/Types";

type PropsType = {
    currentPage:number,
    totalUsersCount: number,
    pageSize:number,
    pageNumber:number,
    isFetching:boolean,
    requestUsers: (currentPage: number, pageSize: number) => void,
    followingProgress: boolean,
    unfollowThunk: (UserId: number) => void,
    followThunk: (UserId: number) => void,
    users: Array<UsersType>,

}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber:number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }


    render() {

        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props}
                   onPageChanged={this.onPageChanged}

                /*currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}*/

            />
        </>
    }
}

const mapStateToProps = (state:any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, requestUsers, unfollowThunk,
    followThunk,
}), WithAuthRedirect)(UsersContainer)