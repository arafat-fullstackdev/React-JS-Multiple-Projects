import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
              <Link to="/"  className='link'>Home</Link>
            </li>
            <li>
              <Link to="/post"  className='link'>Post</Link>
            </li>
            <li>
              <Link to="/contact"  className='link'>Contact</Link>
            </li>
           
        </ul>
    </div>
  )
}

export default NavBar;