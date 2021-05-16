import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/Auth/authContext'

function HomeRating() {
    const authContext = useContext(AuthContext)




    useEffect(()=>{
        authContext.loadUser();
       //eslint-disable-next-line
      },[])
    return (
        <div style={{backgroundColor: 'white '}}>
            Hello from home rating
        </div>
    )
}

export default HomeRating
