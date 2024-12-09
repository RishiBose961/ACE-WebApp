import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logoutUserAction } from "../../slice/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <>
      <div className="navbar bg-base-100 pt-5 pb-5">
        <div className="flex-1">
          <Link to={`/${user?.username}`} className=" text-xl font-semibold">
            ACE
          </Link>
        </div>
        {isAuthenticated ? (
          <div className="flex-none space-x-4">
            <span  onClick={handleLogout} className="bg-rose-100 text-rose-800 cursor-pointer text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-rose-900
             dark:text-rose-300 ms-3">
              Logout
            </span>
            <div className="avatar">
              <div className="ring-cyan-500 ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={user?.avatar} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
