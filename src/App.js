import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Main from "./components/Main";
import Reproductor from './components/Reproductor'

const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))
const WebPlayer = React.lazy(() => import('./pages/WebPlayer'))
const PlayList = React.lazy(() => import('./pages/PlayList'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Suspense fallback={<div />}>
        <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/webplayer" component={WebPlayer} />
        <Route exact path="/webtracks/:id" component={Main} />
        <Route exact path="/playlist/:id" component={PlayList} />
        <Route component={NotFound} />
      </Switch>
      {
        window.location.pathname === '/webplayer/' && <Reproductor /> 
      }
    </BrowserRouter>
    </Suspense>
  );
};

export default App;
