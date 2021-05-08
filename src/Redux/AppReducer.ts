import {getLoginThunk} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}
export const AppReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }

        }
 
        default:
            return state;
    }
}
type InitializedACType = {
    type: typeof SET_INITIALIZED
}

export const InitializedAC = (): InitializedACType => ({type: SET_INITIALIZED})

export const initializeThunk = () => (dispatch: any) => {
    let promise = dispatch(getLoginThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(InitializedAC())
        })
}