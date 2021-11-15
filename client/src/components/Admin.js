import React, {useState} from "react";
import AdminPanel from "../pages/AdminPanel";
import Post from "./Post/Post";

function Admin() {
  const [currentPage, setCurrentPage] = useState("");

  const settingCurrentPage = () => {
  switch (currentPage) {
      case "View post":
          return <Post/>
          
  
      default:
          break;
  }}
  return (
    <div style={{ color: "teal", display: "flex", flexDirection: "row" }}>
      <AdminPanel />
      <div style={{ margin: "0 auto" }}>
        <h1 style={{ justifyContent: "center" }}>Admin</h1>
     <div>{settingCurrentPage(currentPage)}</div>
      </div>
    </div>
  );
}

export default Admin;
