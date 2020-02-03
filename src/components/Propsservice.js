import React from 'react';
import styled from 'styled-components';

const Styl = styled.p`
  .line {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  .smalltext {
    padding-top: 2rem;
  }
`;
const Propsservice = props => (
  <div>
    <Styl>
      <p className=" has-text-weight-bold is-size-3">{props.largetext}</p>
      <p className="smalltext is-7">{props.smalltext}</p>
      <p className="line is-7">{props.line}</p>
    </Styl>
  </div>
);
export default Propsservice;
