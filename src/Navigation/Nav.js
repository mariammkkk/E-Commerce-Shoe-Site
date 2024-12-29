import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import './Nav.css';

function Nav() {
  return ( <nav>
    <div className="nav-container">
        <input 
        type="text" 
        className='search-input'
        placeholder='What shoes are you looking for today?' 
        />
    </div>
    
    <div className='profile-container'>
        <a href = "#">
            <FaRegHeart className="nav-icons" />
        </a>

        <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
        </a>


    </div>

  </nav>
  );
}

export default Nav;
