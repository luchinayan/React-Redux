import {authAPI} from "../API/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}
const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.payload
            }

        }

        default:
            return state;
    }
}
type setAuthDataType = {
    type: typeof SET_AUTH_DATA,
    payload: InitialStateType
}

export const setAuthData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthDataType => ({
    type: SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
})

export const getLoginThunk = () => async (dispatch: any) => {
    let response = await authAPI.getLogin()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthData(id, email, login, true))
    }
}
// export const getMyLoginThunk = (userId) => {
//     return (dispatch) => {
//         profileAPI.getUserProfile(userId).then(response => {
//             console.log(response)
//         })
//     }
// }
export const LoginThunk = (email: string, password: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password)
    if (response.data.resultCode === 0) {
        dispatch(getLoginThunk())
    } else if (response.data.resultCode === 1) {
        console.log(response)
        alert(`${response.data.messages}`)
    }
}
export const LogoutThunk = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export default authReducer;
