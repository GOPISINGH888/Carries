import React from 'react';
import styled from 'styled-components';
import Propiconserv from './Propiconserv';

const Iconserv = styled.div`
  margin-top: 9rem;
  .icon {
    background: url(https://colorlib.com/preview/theme/carries/img/service/service-area-bg.jpg);
    padding-bottom: 50rem;
  }
`;
const Iconservice = () => (
  <Iconserv className="columns">
    <div className="column icon">
      <p>hlo c1</p>
    </div>
    <div className="column">
      <div className="container">
        <p>hello c2</p>
      </div>
    </div>
  </Iconserv>
);
export default Iconservice;
