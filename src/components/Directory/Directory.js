import React from 'react';
import Man from '../../assets/man.jpg';
import Woman from '../../assets/woman.jpg';
import './Directory.scss';

const Directory = () => {
  return (
    <div className="directory">
      <div className="directory__container">
        <div
          style={{ backgroundImage: `url(${Woman})` }}
          className="directory__container--item"
        >
          <a>Shop Woman</a>
        </div>

        <div
          style={{ backgroundImage: `url(${Man})` }}
          className="directory__container--item"
        >
          <a>Shop Man</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
