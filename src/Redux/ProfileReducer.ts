import {profileAPI} from "../API/api";
import {PostsType, ProfileType} from "../types/Types";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [

        {
            id: 1,
            text: 'first post',
            avatarURL: 'https://yt3.ggpht.com/ytc/AAUvwngzNqocpzSIv709uWfJivYr66SKCj3344ezE5WiDA=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            id: 2,
            text: 'second post',
            avatarURL: 'https://yt3.ggpht.com/ytc/AAUvwngzNqocpzSIv709uWfJivYr66SKCj3344ezE5WiDA=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            id: 3,
            text: '3rd post',
            avatarURL: 'https://yt3.ggpht.com/ytc/AAUvwngzNqocpzSIv709uWfJivYr66SKCj3344ezE5WiDA=s900-c-k-c0x00ffffff-no-rj'
        },
    ] as Array<PostsType>,
    newPostText: '',
    profile: null as ProfileType | null,

}
type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            if (action.text === '') {
                alert(`can't send empty post. Try again`)
                return state
            }

            let newOBJ: PostsType = {
                id: 4,
                text: state.newPostText,
                avatarURL: 'https://yt3.ggpht.com/ytc/AAUvwngzNqocpzSIv709uWfJivYr66SKCj3344ezE5WiDA=s900-c-k-c0x00ffffff-no-rj',
            }
            let stateCopy = {...state}
            stateCopy.newPostText = ''
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newOBJ)
            return stateCopy
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    text: string
}
type UpdatePostActionCreatorType = {
    type: typeof UPDATE_POST_TEXT,
    newText: string
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}


export const addPostActionCreator = (text: string): AddPostActionCreatorType => ({type: ADD_POST, text: text})
export const updatePostActionCreator = (text: string): UpdatePostActionCreatorType => {
    return {type: UPDATE_POST_TEXT, newText: text}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const getUserProfileThunk = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
}

export default profileReducer;