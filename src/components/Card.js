import React from 'react';
import Propcard from './Propcard';

const Card = () => (
  <div className="has-background-light">
    <div className="container section ">
      <div className="columns">
        <div className="column">
          <Propcard
            img="https://colorlib.com/preview/theme/carries/img/blog/blog_1.jpg"
            largetext="OCEAN FREIGHT"
            smalltext="It is a long established fact
          that a reader will be distracted by the readable content of a page when looking at its layout.."
            icon="fas fa-ship"
            button="read more"
          />
        </div>
        <div className="column">
          <Propcard
            img="https://colorlib.com/preview/theme/carries/img/blog/blog_2.jpg"
            largetext="AIR FREIGHT"
            smalltext="It is a long established fact
          that a reader will be distracted by the readable content of a page when looking at its layout.."
            icon="fas fa-plane"
            button="read more"
          />
        </div>
        <div className="column">
          <Propcard
            img="https://colorlib.com/preview/theme/carries/img/blog/blog_3.jpg"
            largetext="STREET FREIGHT"
            smalltext="It is a long established fact
          that a reader will be distracted by the readable content of a page when looking at its layout.."
            icon="fas fa-truck"
            button="read more"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Card;
