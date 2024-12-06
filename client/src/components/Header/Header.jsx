import { Link } from "react-router";
import {SquarePlusIcon} from 'lucide-react'
const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 pt-5 pb-5">
        <div className="flex-1">
          <Link className=" text-xl font-semibold">ACE</Link>
        </div>
        <div className="flex-none space-x-4">
          <Link to="/new">
          <SquarePlusIcon className="hover:text-primary cursor-pointer"/>
          </Link>
        
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Header;
