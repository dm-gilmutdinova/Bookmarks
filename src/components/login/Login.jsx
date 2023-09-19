import { ReactComponent as TwiIcon } from './../../img/login/twi.svg';
import { ReactComponent as GoogleIcon } from './../../img/login/google.svg';
import { ReactComponent as FacebookIcon } from './../../img/login/facebook.svg';
import { ReactComponent as PinterestIcon } from './../../img/login/pinterest.svg';
import { ReactComponent as BtntIcon } from './../../img/login/btn.svg';

import './login-module.css';

export const Login = () => {
  return (
    <div className='container'>
      <div className='login'>
        <div className='login__card'>
          <div className='login__card-title'>You’re Bookmarks</div>
          <div className='login__card-input'>
            <input type='text' placeholder='surname' />
            <input type='password' placeholder='password' />
            <ul className='login__card-social'>
              <li>
                <a href=''>
                  <TwiIcon />
                </a>
              </li>
              <li>
                <a href=''>
                  <GoogleIcon />
                </a>
              </li>
              <li>
                <a href=''>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href=''>
                  <PinterestIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className='login__button'>
            <a href='/sign'>
              <button className='btn__registration'>Create bookmarks</button>
            </a>
            <button className='login__button-btn'>
              <BtntIcon className='login__btn-icon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
