import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";

const store = {
    _state: {
        ProfilePage: {
            posts: [

                {
                    id: 1,
                    text: 'first post',
                    avatarURL: 'https://yt3.ggpht.com/ytc/AAUvwngzNqocpzSIv709uWfJivYr66SKCj3344ezE5WiDA=s900-c-k-c0x00ffffff-no-rj'
                },
                {
                    id: 2,
                    text: 'second post',
                    avatarURL: 'https://www.meme-arsenal.com/memes/c4b4f89aeb7b6b9da275959cec6d2741.jpg'
                },
                {
                    id: 3,
                    text: 'i love JEWS',
                    avatarURL: 'https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg'
                },
            ],
            newPostText: ''
        },
        DialogsPage: {
            messages:
                [{id: 1, message: 'Hello'},
                    {id: 2, message: 'こんにちわ'},
                    {id: 3, message: 'ありがと'},
                    {id: 4, message: '猫'},
                ],
            newTextMessage: '',
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
                        avatarURL: 'https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg'
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

                ]

        }
    },
    _callSubscriber() {
        console.log('change')
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action)
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}


window.store = store
export default store