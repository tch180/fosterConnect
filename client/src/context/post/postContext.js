import { createContext, useContext } from 'react'
import { usePostReducer } from './postReducer'
import { initialState } from './PostState'

const PostStateContext = createContext()
const PostDispatchContext = createContext()

const PostProvider = (props) => {
    const [state, dispatch] = usePostReducer(initialState)
    return (
        <PostStateContext.Provider value={state}>
            <PostDispatchContext.Provider value={dispatch}>
                {props.children}
            </PostDispatchContext.Provider>
        </PostStateContext.Provider>
    )







}

export default PostProvider
export const usePostState = () => useContext(PostStateContext)
export const usePostDispatch = () => useContext(PostDispatchContext)

