import React, {useState} from "react";
import { Route, useRouteMatch } from "react-router-dom";

import AdminPanel from "../../pages/AdminPanel";
import Posts from "./Posts";
import Users from "./Users";

function Admin() {
  const { url, path } = useRouteMatch();


  return (
    <div style={{ color: "teal", display: "flex", flexDirection: "row" }}>
      <AdminPanel />
      <Route exact path={path}>
        <Users />
      </Route>
      <Route path={`${path}/ViewUsers`}>
      <Users />
      </Route>
      <Route path={`${path}/ViewPost`}>
        <Posts/>
      </Route>
      <Route path={`${path}/Mentors`}>
       
      </Route>

    </div>
  );
}

export default Admin;
