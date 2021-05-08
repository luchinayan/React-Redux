import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {/*all what will be changed u should write down без этого не будет удалться текст в форме после отпавки сообещния*/
        posts: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (text) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


















