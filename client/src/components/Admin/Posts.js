import React, {Fragment, useContext, useEffect} from 'react'
import AdminContext from '../../context/Admin/adminContext'
import Spinner from '../../layout/Spinner'
import PostsItem from './PostsItem';


function Posts() {
    const adminContext = useContext(AdminContext);
    const{getAllUsersPost, loading,posts} = adminContext;

    useEffect(() => {
        getAllUsersPost();
        //eslint-disable-next-line
    }, []);
    
    return (
      <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">All Post</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {posts.map(post => (
                   <div className="col-6 col-lg-4 col-xl-3 mb-4" key={post._id}>
                       <PostsItem post={post} />
                       </div>
                    ))}
          </div>
          </div>
        )}
      </Fragment>
    );
}

export default Posts
