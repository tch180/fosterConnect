import React, { useReducer} from 'react'
import axios from 'axios'
import PostContext from './postContext'
import postReducer from './postReducer'


//TYPES
import { 
    GET_POST,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    POST_ERROR
} from '../types.js'


const PostState = (props) =>{
    const initialState= { 
        post: [], 
        error: null, 
    }

const [state,dispatch] = useReducer(postReducer, initialState); 

const getUsersPost = async () =>{
    try {
        const res = await axios.get('/api/posts')
            dispatch({ type: GET_POST, payload: res.data})
    } catch (error) {
        dispatch({ type: POST_ERROR, payload: error.response.msg})
    }
}

return ( 
 <PostContext.Provider
 value={{
    post: state.post,
    error: state.error,
    getUsersPost, 


 }}>


     {props.children}
 </PostContext.Provider>

)





}; 

export default PostState



