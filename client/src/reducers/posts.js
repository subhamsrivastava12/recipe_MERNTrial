
import {FETCH,CREATE,DELETE,UPDATE,LIKE} from './../actiontype';
export default (posts=[],action)=>{
    switch(action.type){
        case FETCH:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        case UPDATE:
        case LIKE:    
            return posts.map((post)=> post._id===action.payload._id?action.payload:post)            
        case DELETE:
            return posts.filter((post)=>post._id!==action.payload);
        default:
            return posts;        
    }
} 