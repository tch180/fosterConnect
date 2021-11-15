import React, {  useContext, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PostContext from "../../context/post/postContext";

const NewPost = () => {
  const postContext = useContext(PostContext);

  const { addUserPost, post  } = postContext;




  
  const [newPost, setPost] = useState({
    postTitle: "",
    postText: "",
  });

  const { postTitle, postText } = post;

  const onChange = (e) => 
    setPost({ ...newPost,[e.target.name]: e.target.value,});

 const onSubmit = (e) =>{
   console.log('starting to submit post')
   e.preventDefault()
   addUserPost(newPost)
   
 }

 

  return (
    <form id="newPostForm" className=' mx-2 mb-5 ' onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="postTitle"
          value={postTitle}
          onChange={onChange}
          className="form-control"
          id="floatingTitleName"
          placeholder="Post Title"
        />
        <label htmlFor="floatingTitleName">Post Title </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="textArea"
          name="postText"
          value={postText}
          onChange={onChange}
          className="form-control"
          id="floatingText"
          placeholder="Post Title"
        />
        <label htmlFor="floatingTitleName">Post Text </label>
      </div>
      <button type="submit" className="btn btn-success m-3">
              Submit Post 
            </button>
    </form>
  );
};

export default NewPost;
