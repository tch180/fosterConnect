import React, { useEffect, Fragment, useContext } from "react";
import AdminContext from "../../context/Admin/adminContext";
import Spinner from "../../layout/Spinner";
import UserItem from "./UserItem";
// isAdmin: state.isAdmin,
// error: state.error,
// user: state.user,
// isAuthenticated: state.isAuthenticated,
// loading: state.loading,
// adminCheck,
// checkForAdminUserAndLogin,
// loadAdminUser,
// logout,
// getAllUsers,
// getAllUsersPost,
// getOneUserById,
// getOnePostById,
// deleteOneUsersPost,
// updateUser,
// deleteUse

function Users() {
  const adminContext = useContext(AdminContext);
  const { getAllUsers, loading, users } = adminContext;

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  // console.log(users, "users");
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">All Users</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              {users.map((user) => (
                <div key={user._id}>
                  <UserItem user={user} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Users;
