import React from 'react';

const Propcard = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.img} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media"></div>
      <div className="media-content">
        <p className="title is-5">{props.largetext}</p>
        <p className="subtitle is-7">{props.smalltext}</p>
        <i src={props.icon} />
        <div className="button is-secondary is-medium">{props.button}</div>
      </div>
    </div>
  </div>
);
export default Propcard;
