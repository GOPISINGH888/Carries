import React from 'react';
import styled from 'styled-components';
import Propsservice from './Propsservice';

const Service = styled.p`
  color: ${props => props.theme.greyshade};
  margin-top: 3rem;
  .img {
    background: url(https://colorlib.com/preview/theme/carries/img/service/service-cargo-bg.png)
      no-repeat scroll center center/contain;
    position: relative;
    height: 17rem;
  }

  .secondrycard {
    background: rgba(243, 156, 18, 0.9) none repeat scroll 0 0;
    color: ${props => props.theme.mainBrandColor};
    padding: 30px;
    margin-left: 22rem;
    margin-right: 2rem;
  }

  .columns {
    margin-top: 2rem;
  }
  li {
    padding-bottom: 1rem;
  }
  @media only screen and (max-width: 600px) {
    .secondrycard {
      margin: 0px;
    }
  }
`;
const Services = () => (
  <div className="container">
    <Service>
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
          <div className="button is-secondary is-medium">Learn More</div>
        </div>
        <div className="column is-three-quarters img">
          <div className="card is-pulled-right	secondrycard">
            <Propsservice
              largetext="WHY CHOOSE US ?"
              line="--------"
              smalltext="I must explain to you how all this mistaken idea of  denouncing
      pleasure and praising pain was born and I will
      give you."
            />
            <ul>
              <li>
                <i className="fa fa-check" /> Lorem ipsum dolor sit amet,
                consectetur.
              </li>
              <li>
                <i className="fa fa-check" /> Sed quia consequuntur magni
                dolores eos.
              </li>
              <li>
                <i className="fa fa-check" /> Nemo enim ipsam voluptatem .
              </li>
              <li>
                <i className="fa fa-check" /> We denounce with righteous
                indignation.
              </li>
            </ul>
            <div className="button is-primary is-medium">Learn More</div>
          </div>
        </div>
      </div>
    </Service>
  </div>
);
export default Services;
