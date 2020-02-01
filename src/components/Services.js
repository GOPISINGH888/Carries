import React from 'react';
import styled from 'styled-components';
import Propsservice from './Propsservice';

const Servicebg = styled.p`
  background: url(https://colorlib.com/preview/theme/carries/img/service/service-cargo-bg.png)
    no-repeat scroll center center/contain;
  position: relative;
  height: 17rem;
  .card {
    background: rgba(243, 156, 18, 0.9) none repeat scroll 0 0;
    color: ${props => props.theme.mainBrandColor}
    padding: 30px;
  }
`;
const Services = () => (
  <div className="container">
    <div className="has-text-centered">
      <Propsservice
        largetext="OUR SERVICE"
        smalltext="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"
      />
    </div>
    <div className="columns">
      <div className="column is-4">
        <Propsservice
          largetext="WE OFFER QUICK & POWERFUL LOGISTICS SOLUTION"
          line="--------"
          smalltext="I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain was born and I will
      give you."
        />
      </div>
      <Servicebg>
        <div className="column is-three-quarters">
          <div className="card">
            <Propsservice
              largetext="WHY CHOOSE US ?"
              line="--------"
              smalltext="I must explain to you how all this mistaken idea of  denouncing
      pleasure and praising pain was born and I will
      give you."
            />
          </div>
        </div>
      </Servicebg>
    </div>
  </div>
);
export default Services;
