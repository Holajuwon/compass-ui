import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AllPosts from "./Pages/AllPosts";
import Editor from "./Pages/Editor";
import Post from "./Pages/Post";
import Error from "./Pages/Error";
import RegisterForm from './Pages/RegisterForm'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/post/:string" element={<Post />} />
      <Route path="/post" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
