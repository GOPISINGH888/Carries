import React from 'react';
import styled from 'styled-components';

const Service = styled.p`
  .linecolor {
    color: ${props => props.theme.darkAccent};
    font-size: 44px;
  }
  .color {
    color: ${props => props.theme.darkAccent};
  }
`;
const Clmn = styled.p`
  background: url(https://colorlib.com/preview/theme/carries/img/service/service-cargo-bg.png);
`;
const Services = () => (
  <div className="container">
    <Service>
      <p className="title has-text-centered">OUR SERVICES </p>
      <div className="has-text-centered">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque{' '}
        </p>
        <p>laudantium,</p>
      </div>
      <div className="columns">
        <div className="column is-one-third">
          <p className="title">WE OFFER QUICK & POWERFUL LOGISTICS SOLUTION</p>
          <p className="color">---------</p>
          <p>
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you.
          </p>
          <div className="button is-secondary is-small">Learn more</div>
        </div>
        <Clmn>
          <div className="column"><div class="tile ">.</div></div>
        </Clmn>
      </div>
    </Service>
  </div>
);
export default Services;
