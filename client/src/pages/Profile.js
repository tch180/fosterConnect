/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import AuthContext from "../context/Auth/authContext";
import ProfileSidebar from "../layout/ProfileSidebar";
import Post from "../components/Post/Post";
import NewPost from "../components/Post/NewPost";
import Mentors from "../pages/Mentors";

function Profile(props) {
  const { url, path } = useRouteMatch();

  return (
    <div style={{ color: "teal", display: "flex", flexDirection: "row" }}>
      <ProfileSidebar />
      <Route exact path={path}>
        <Post />
      </Route>
      <Route path={`${path}/ViewPost`}>
        <Post />
      </Route>
      <Route path={`${path}/NewPost`}>
        <NewPost />
      </Route>
      <Route path={`${path}/Mentors`}>
        <Mentors />
      </Route>
    </div>
  );
}

export default Profile;
