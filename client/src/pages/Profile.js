/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/Auth/authContext'
import ProfileSidebar from '../layout/ProfileSidebar'
import UsersPost from '../components/Post/Post'



function Profile(props) {
 const authContext = useContext(AuthContext)
 //const {user,logout} = authContext

 useEffect(()=>{
   authContext.loadUser();
  //eslint-disable-next-line
 },[])

 




    return (
        <div style={{color:'teal',display:'flex', flexDirection:'row'}}>
            <ProfileSidebar/>
            <UsersPost/>
      

        </div>
    )
}

export default Profile
