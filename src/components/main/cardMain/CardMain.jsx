import { Card } from '../../cards/card';
import './cardMain-module.css';

export const CardMain = () => {
  return (
    <div className='container'>
      <div className='cards'>
        <div className='cards__title'>Create your own unique card</div>
        <div className='cards__user'>
          <div className='cards__user-us'>
            <Card />
          </div>
          <div className='cards__user-us'>
            <Card />
          </div>
        </div>
        <div className='cards__subtitle'>
          So what are you waiting for?
          <br />
          Join Bookmarks today and start your journey into the world of books!
        </div>
        <a href='/login' className='cards__btn'>
          Make Bookmarks
        </a>
      </div>
    </div>
  );
};
