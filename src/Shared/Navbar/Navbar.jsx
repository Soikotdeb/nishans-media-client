import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      Navbar!
      <ul>
        <li><Link to="/accounts">Accounts</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;

