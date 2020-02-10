import React from 'react';
import styled from 'styled-components';

const Delivryprop = styled.p`
  .largetext {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .icon {
    margin-top: 2.5rem;
    border-radius: 50%;
    color: ${props => props.theme.darkAccent} !important;
    font-size: 24px;
    height: 65px;
    text-align: center;
    width: 65px;
  }
  .singlepromo {
    margin-bottom: 4rem;
  }
`;
const Propdelivry = props => (
  <Delivryprop className="container ">
    <div className="is-flex">
      <div className="icon has-background-grey-lighter is-pulled-left">
        <i className={props.icon} />
      </div>
      <div className="singlepromo is-pulled-right">
        <p className="title is-4 largetext">{props.largetext}</p>
        <p className="subtitle is-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </Delivryprop>
);
export default Propdelivry;
