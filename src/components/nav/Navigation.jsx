// import { NavLink } from 'react-router-dom';
import { ReactComponent as BookmarksLogo } from './../../img/logo.svg';
import './navigation-module.css';

export const Navigation = () => {
  return (
    <div className='container'>
      <nav>
        <a href='/' className='logo'>
          <BookmarksLogo />
        </a>
        <ul className='list'>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Bookshelf</a>
          </li>
          <li>
            <a href='#'>Trends</a>
          </li>
          <li>
            <a href='#'>Search</a>
          </li>
        </ul>
        <a href='/login' className='nav__login'>
          Log In
        </a>
      </nav>
    </div>
  );
};
