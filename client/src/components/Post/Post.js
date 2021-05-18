import React, { useEffect, Fragment, useContext } from "react";
import PostContext from "../../context/post/postContext";
import NewPost from './NewPost'
import PostItem from "./PostItem";

function Post() {
  const postContext = useContext(PostContext);
  const { getUsersPost, post,loading } = postContext;
 
  useEffect(() => {
    getUsersPost();
    //eslint-disable-next-line
  }, []);

 

  return (
    <Fragment>
      <div>
        
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">Your Post</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {post.map((post) => (
              <div key={post._id}>
                  <PostItem post={post}/>
              </div>
            ))}
          </div>
        </div>
        <NewPost/>
      </div>
    </Fragment>
  );
}

export default Post;
