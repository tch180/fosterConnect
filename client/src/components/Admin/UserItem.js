import React, {useContext} from 'react'
import AdminContext from '../../context/Admin/adminContext';


function UserItem({ user }) {
    const adminContext = useContext(AdminContext);
    const {deleteUser} = adminContext
    const { _id, firstName,lastName, email, role, } = user;
    const onDelete = () => {
        deleteUser(_id)
    }
    return (
        <div>
              <div className="card h-100" key={user._id}>
                <div className="card-body">
                  <h5 className="card-title">{firstName}</h5>
                  <h5 className="card-title">{lastName}</h5>
                  <p className="card-text">{email}</p>
                  <p className="card-text">{role}</p>
                  <p className="card-text">{user._id}</p>
                  <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
                </div>
              </div>
            </div>
        
    )
}

export default UserItem
