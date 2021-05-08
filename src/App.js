import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import React from 'react'
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeThunk} from "./Redux/AppReducer";
import Preloader from "./assets/image/Preloader";

const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={(p) => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={(p) => <ProfileContainer/>}/>
                    <Route path="/users" render={(p) => <UsersContainer/>}/>
                    <Route path="/login" render={(p) => <Login/>}/>
                    <Route path="/news" render={p =>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <News/>
                        </React.Suspense>}/>
                    <Route path="/music" render={p =>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Music/>
                        </React.Suspense>
                    }/>
                    <Route path="/settings" render={p=>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Settings/>
                        </React.Suspense>
                    }/>
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeThunk}))
(App)



