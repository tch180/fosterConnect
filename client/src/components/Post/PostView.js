import React, {useState} from 'react'
import Mentors from '../../pages/Mentors'
import NewPost from './NewPost'
import Post from './Post'

const PostView = () => {

    const [page, setPage] = useState(true)

    
        switch (page) {
            case 'View Post':
            return <Post />
            case 'Add Post' : 
            return <NewPost/>
            case 'View Mentors': 
            return <Mentors/> 
            case 'View Resources': 
            return null 
            default: 
            return <Post/>    
        }
    
  



    return (
        <div>
            {}
        </div>
    )
}

export default PostView
