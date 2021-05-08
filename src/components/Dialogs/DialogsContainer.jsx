import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/DialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPageData: state.dialogPage,
        newTextMessage: state.dialogPage.newTextMessage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {updateMessageActionCreator, addMessageActionCreator}),
    WithAuthRedirect
)(Dialogs)
























