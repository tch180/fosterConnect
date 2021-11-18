import React, { useContext } from "react";
import AdminContext from "../../context/Admin/adminContext";

function PostsItem({ post }) {
  const adminContext = useContext(AdminContext);
  const { deleteOneUsersPost } = adminContext;
  const { _id, postTitle, postText,user } = post;
  const onDelete = () => {
    deleteOneUsersPost(_id);
  };
  return (
    <div>
      <div className="card h-100" key={post._id}>
        <div className="card-body">
          <h5 className="card-title">Title: {postTitle}</h5>
          <p className="card-text">Text: {postText}</p>
          <p className="card-text">PostID: {post._id}</p>
          <p className="card-text">PostUser: {user}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostsItem;
