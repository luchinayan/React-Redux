const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
export type MessagesType={
    id:number,
    message:string
}
export type DialogsType={
    id:number,
    name:string,
    avatarURL?:string
}
const initialState = {
    messages:
        [{id: 1, message: 'Hello'},
            {id: 2, message: 'こんにちわ'},
            {id: 3, message: 'ありがと'},
            {id: 4, message: '猫'},
        ] as Array<MessagesType>,
    dialogs:
        [
            {
                id: 1,
                name: 'Yan',
                avatarURL: 'https://www.meme-arsenal.com/memes/c4b4f89aeb7b6b9da275959cec6d2741.jpg'
            },
            {
                id: 2,
                name: 'Petya',
                avatarURL: 'https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png'
            },
            {
                id: 3,
                name: 'Jake',
                avatarURL: 'https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png'
            },
            {
                id: 4,
                name: 'Nihon',
                avatarURL: 'https://static01.nyt.com/images/2017/09/12/us/12xp-monkey1/12xp-monkey1-superJumbo.jpg'
            },
            {
                id: 5,
                name: 'Tamago',
                avatarURL: 'https://yt3.ggpht.com/ytc/AAUvwngzNqocpzSIv709uWfJivYr66SKCj3344ezE5WiDA=s900-c-k-c0x00ffffff-no-rj'
            },

        ] as Array<DialogsType>,
    newTextMessage: ""
}
export type initialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): initialStateType => {
    /*иммутабельность - что приходит в функцию то и выходит*/
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newTextMessage = action.newMessage
            return stateCopy
        }
        case ADD_MESSAGE: {
            if (action.text === '') {
                alert(`can't send empty post. Try again`)
                return state
            }
            let stateCopy = {...state}/* а тут {} тк там объект*/
            stateCopy.messages = [...state.messages]/*внимательно [] тк там массик*/
            stateCopy.messages.push({id: 5, message: state.newTextMessage})
            stateCopy.newTextMessage = ''
            return stateCopy

        }
        default:
            return state
    }

}
export type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    text: string
}
export type UpdateMessageActionCreatorType = {
    type: typeof UPDATE_MESSAGE_TEXT,
    newMessage: string
}

export const addMessageActionCreator = (text: string): AddMessageActionCreatorType => ({type: ADD_MESSAGE, text: text})
export const updateMessageActionCreator = (text: string): UpdateMessageActionCreatorType => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
})
export default dialogReducer;