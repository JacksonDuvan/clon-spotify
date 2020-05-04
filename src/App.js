import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import WebPlayer from './pages/WebPlayer'
import Main from './components/Main'
import Track from './pages/Track'
import PlayList from './pages/PlayList'
import PlatlistTrack from './pages/PlaylistTrack'


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/webplayer" component={WebPlayer}/>
                <Route exact path="/webtracks/:id" component={Main}/>
                <Route exact path="/track/:id/:id" component={Track}/>
                <Route exact path="/playlist/:id" component={PlayList}/>
                <Route exact path="/playlist/track/:id/:id" component={PlatlistTrack}/>
                {/* <Route exact path="/maintracks/:id" component={MainTrack}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default App
