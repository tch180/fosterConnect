import React, { useContext } from "react";
import PostContext from "../../context/post/postContext";

const PostItem = ({ post }) => {
  const postContext = useContext(PostContext);
  const { deleteUserPost } = postContext;
  const { postTitle, postText, _id } = post;

  const onDelete = () => {
    deleteUserPost(_id);
    console.log(post._id, "PostID ");
  };

  return (
    <div>
      <div key={post._id} className="col d-flex align-items-start">
        <div>
          <div className="card">
            <h5>{post._id}</h5>
            <div className="card-header">
              <h3>{postTitle.toUpperCase()}</h3>
            </div>
            <div className="card-body">
              <p>{postText}</p>
            </div>
            <div
              className="button-group"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDelete}
              >
                Delete
              </button>
              <button type="button" className="btn btn-info">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
