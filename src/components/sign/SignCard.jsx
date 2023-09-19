import { ReactComponent as BtntIcon } from './../../img/login/btn.svg';

import './signCard-module.css';

export const SignCard = () => {
  return (
    <div className='container'>
      <div className='sign'>
        <div className='sign__card'>
          <div className='sign__card-title'>Welcome!</div>
          <div className='sign__card-input'>
            <input type='email' placeholder='e-mail' />
            <input type='text' placeholder='surname' />
            <input type='password' placeholder='password' />
          </div>
          <div className='sign__button'>
            <button className='sign__button-btn'>
              <BtntIcon className='sign__btn-icon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
