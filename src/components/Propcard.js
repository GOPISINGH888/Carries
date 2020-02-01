import React from 'react';
import styled from 'styled-components';

const Cards = styled.p`
  p {
    color: ${props => props.theme.greyshade} !important;
  }
  .title:hover {
    color: ${props => props.theme.darkAccent} !important;
  }
  .media-content {
    text-align: center;
  }

  .icon {
    background-color: ${props => props.theme.darkAccent} !important;
    color: ${props => props.theme.mainBrandColor}!important;
    border-radius: 0 50px 50px 0;
    font-size: 24px;
    height: 50px;
    position: absolute;
    padding-left: 25px;
    padding-right: 36px;
    top: 239px;
  }
`;
const Propcard = props => (
  <div className="card">
    <Cards>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} />
        </figure>
        <div className="icon">
          <i className={props.icon} />
        </div>
      </div>
      <div className="card-content">
        <div className="media" />
        <div className="media-content">
          <p className="title is-5">{props.largetext}</p>
          <p className="subtitle is-7">{props.smalltext}</p>
          <div className="button is-secondary is-medium">{props.button}</div>
        </div>
      </div>
    </Cards>
  </div>
);
export default Propcard;
