import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/App',
      text: 'Calulator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <nav data-testId="navbar" className="navBar">
      <h2>Math Magicians</h2>
      <ul className="links">
        {links.map((link) => <li key={link.id}><Link to={link.path} activeClassName="active-link" exact>{link.text}</Link></li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
