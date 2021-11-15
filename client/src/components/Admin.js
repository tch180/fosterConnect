import React, { Fragment,useContext } from 'react'
import AdminPanel from '../pages/AdminPanel'
import AdminContext from "../context/Admin/adminContext";

function Admin() {
    const adminContext= useContext(AdminContext)
    return (
        <div style={{ color: "teal", display: "flex", flexDirection: "row" }}>
            <AdminPanel/>
            <div style={{ margin: "0 auto" }}>
            <h1 style={{ justifyContent:'center'}}>Admin</h1>
        </div>
        </div>
        
        
            
           
        
    )
}

export default Admin
