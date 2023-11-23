import { ReactComponent as CommentsIcon } from './../../../img/news/comments.svg';
import { ReactComponent as LikeIcon } from './../../../img/news/like.svg';
import { ReactComponent as RepostIcon } from './../../../img/news/repost.svg';
import { ReactComponent as ViewsIcon } from './../../../img/news/views.svg';

import './newsCard-module.css';

export const NewsCard = () => {
  return (
    <div className='container'>
      <div className='newsCard'>
        <div className='newsCard__name'>
          <div className='newsCard__name-img'></div>
          <div className='newsCard__name-about'>
            <div>
              <span className='newsCard__name-name'>Name</span>
              <span className='newsCard__name-surname'>@id_name</span>
            </div>
            <div className='newsCard__name-data'>01/01/2023</div>
          </div>
          <div className='newsCard__name-author'>"1984" by George Orwell</div>
        </div>
        <div className='newsCard__text'>
          A Hauntingly Relevant Classic
          <br />
          <br />
          "1984" by George Orwell is a timeless classic that is as relevant
          today as it was when it was first published in 1949. While many of us
          may recognize the book's striking parallels to contemporary society,
          its themes of authoritarianism, censorship, and the control of
          information are timeless. It is a testament to Orwell's insight and
          prophetic abilities that his novel has stood the test of time and
          continues to resonate with readers today.
          <br />
          <br />
          One of the most striking aspects of "1984" is its chillingly accurate
          depiction of a totalitarian regime. The novel takes place in a
          fictional country called Oceania, where the Party rules with an iron
          fist. The Party controls every aspect of life, from the language used
          to the history that is taught. Dissent is not tolerated, and those who
          dare to speak out against the Party are disappeared or taken to Room
          101, where they undergo a form of brainwashing that transforms them
          into mindless, obedient citizens.
          <br />
          <br />
          Although "1984" is a work of fiction, it reads like a cautionary tale.
          The novel serves as a warning about the dangers of totalitarianism and
          the importance of free thought and speech. It is a reminder that,
          while democracy and human rights may seem like sacred institutions,
          they can be easily corrupted and taken away if we are not vigilant in
          protecting them.
          <br />
          <br />
          In a time where misinformation and fake news abound, it is more
          important than ever to question the information we consume and to seek
          out the truth. By reading "1984," we can gain a deeper understanding
          of the dangers of totalitarianism and the importance of critical
          thinking. It is a powerful reminder that, while the world around us
          may be constantly changing, the lessons we learn from the classics
          like "1984" will always remain relevant.
        </div>
        <div className='newsCard__reaction'>
          <span>
            <CommentsIcon /> 5
          </span>
          <span>
            <LikeIcon /> 40
          </span>
          <span>
            <RepostIcon /> 100
          </span>
          <span>
            <ViewsIcon /> 12.5K
          </span>
          <span>...</span>
        </div>
      </div>
    </div>
  );
};
