import React, { useEffect, Fragment, useContext } from "react";
import PostContext from "../../context/post/postContext";

function Post() {
  const postContext = useContext(PostContext);
  const { getUsersPost, post } = postContext;

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
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-light text-dark flex-shrink-0 me-3"></div>
              <div>
                {post.map((post) => (
                  <div key={post._id}>
                    <h2>{post.postTitle}</h2>
                    <p>{post.postText}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Post;
