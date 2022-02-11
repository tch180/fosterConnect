import React, { useEffect, Fragment,useState } from "react";
import NewPost from "./NewPost";
import PostItem from "./PostItem";
import Spinner from "../../layout/Spinner";
import { getUsersPost } from "../../context/post/PostState";

const Post =()=> {
const [post,setPost] = useState([]);
const [loading,setLoading] = useState(false);

// const getUsersPost = useCallback(async () => {
//     // getUsersPost();
//     setPost(post);
//   }, [post]);
  


  useEffect(() => {
    getUsersPost();
  }, []);

  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div>
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">Your Post</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {post.map((post) => (
              <div key={post._id}>
                <PostItem post={post} />
              </div>
            ))}
          </div>
        </div>
        {/* <NewPost /> */}
      </div>
    </Fragment>
  );
}

export default Post;
