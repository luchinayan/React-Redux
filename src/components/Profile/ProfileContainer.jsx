import React from "react"
import {Profile} from "./Profile";
import {getUserProfileThunk} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshComponent() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId ? this.props.userId : 2
        }
        this.props.getUserProfileThunk(userId)
    }

    componentDidMount() {
        this.refreshComponent()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshComponent()
        }
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId

})

export default compose(
    connect(mapStateToProps, {getUserProfileThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
