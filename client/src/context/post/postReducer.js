import { 
    GET_POST,
    UPDATE_POST,
    ADD_POST,
    DELETE_POST,
    POST_ERROR
} from '../types.js'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type){
        case GET_POST:
            return {
                ...state,
                post:action.payload
            };
            default:
                return state;
    }
}