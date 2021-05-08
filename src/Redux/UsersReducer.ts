import {userAPI} from "../API/api";
import {UsersType} from "../types/Types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: false
}

type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...action.user]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.followingProgress,
            }

        }
        default:
            return state
    }
}
type FollowType = { type: typeof FOLLOW, userID: number }
export const follow = (userID: number): FollowType => ({type: FOLLOW, userID})

type UnfollowType = { type: typeof UNFOLLOW, userID: number }
export const unfollow = (userID: number): UnfollowType => ({type: UNFOLLOW, userID})

type SetUsersType = { type: typeof SET_USERS, user: UsersType }
export const setUsers = (user: UsersType): SetUsersType => ({type: SET_USERS, user})

type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountType = { type: typeof SET_TOTAL_USERS_COUNT, totalCount: number }
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})

type ToggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingProgressType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, followingProgress: boolean }
export const toggleFollowingProgress = (followingProgress: boolean): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingProgress
})

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true))
    let response = await apiMethod(userID)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false))
}

export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUser(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setCurrentPage(page))

            })
    }
}
export const followThunk = (userID: number) => (dispatch: any) => {
    let apiMethod = userAPI.followAPI.bind(userAPI)
    let actionCreator = follow
    followUnfollowFlow(dispatch, userID, apiMethod, actionCreator)

}
export const unfollowThunk = (userID: number) => (dispatch: any) => {

    let apiMethod = userAPI.unfollowAPI.bind(userAPI)
    let actionCreator = unfollow
    followUnfollowFlow(dispatch, userID, apiMethod, actionCreator)

}
export default usersReducer;