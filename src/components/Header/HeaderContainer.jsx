import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {LogoutThunk, setAuthData} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {
    render() {

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,


})

export default connect(mapStateToProps, {setAuthData, LogoutThunk})(HeaderContainer)
