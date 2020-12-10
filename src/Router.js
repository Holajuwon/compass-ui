import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import AllPosts from "./Pages/AllPosts";
import Editor from "./Pages/Editor";
import Post from "./Pages/Post";
import Error from "./Pages/Error";
import RegisterForm from './Pages/RegisterForm'

export default () => (
  <BrowserRouter>
    <Switch>
    <Route component={Home} path="/" exact />
      <Route component={AllPosts} path="/posts" exact />
      <Route component={Editor} path="/editor" />
      <Route component={RegisterForm} path ='/register' />
      <Route path="/post" component={Post} />
      <Route path="/post">
        <Redirect to="/" />
      </Route>
      <Route path='/post/:string'>
        <Redirect to=''/>
      </Route>
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);
