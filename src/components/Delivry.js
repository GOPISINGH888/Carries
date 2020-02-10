import React from 'react';
import styled from 'styled-components';
import Propdelivry from './Propdelivry';

const Delivryimg = styled.p`
  .promo-botton-area-bg {
    background: url(https://colorlib.com/preview/theme/carries/img/promo/promo_top_bg.png)
      no-repeat;
    background-size: 29rem;
    padding-bottom: 2rem;
  }
`;
const Delivry = () => (
  <div className="container">
    <Delivryimg className="columns">
      <div className="column">
        <Propdelivry icon="fa fa-anchor" largetext="OUR LOCATION" />
        <Propdelivry icon="fa fa-newspaper" largetext="24/7 SUPPORT" />
      </div>
      <div className="column">
        <Propdelivry icon="fa fa-umbrella" largetext="LATEST NEWS" />
        <Propdelivry icon="fa fa-bicycle" largetext="FAST DELEVERY" />
      </div>
      <div className="column promo-botton-area-bg">
        <p>.</p>
      </div>
    </Delivryimg>
  </div>
);
export default Delivry;
