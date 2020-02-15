import React from 'react';

const Footer = () => (
  <div className="container">
    <div className="columns">
      <div className="column">
        <div className="title">About Us</div>
        <p>--------</p>
        <p className="aboutext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div>
          <i className="fas fa-phone-alt" />
          <p className="contactno."> +8801911854378</p>
        </div>
        <div>
          <i className="fas fa-map-marker-alt" />
          <p className="email">backpiper.com@gmail.com</p>
        </div>
        <div>
          <i className="fas fa-phone-alt" />
          <p className="address"> Gazipur, 1704, Bangladesh. 1215.</p>
        </div>
      </div>
      <div className="column">
        <div className="title">Latest Tweets</div>
        <p>--------</p>
        <div>
          <p className="tweetext">
            {' '}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem .
          </p>
          <p className="munitsago">5 Miniutes Ago</p>
          <p className="tweetext">
            {' '}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem .
          </p>
          <p className="munitsago">5 Miniutes Ago</p>
        </div>
      </div>
      <div className="column">
        <div className="title">Customer Service</div>
        <p>--------</p>
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul className="is-grid">
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="far fa-hand-point-right" />
                </span>
                <span>Support Forums</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="far fa-hand-point-right" />
                </span>
                <span>Communication</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="far fa-hand-point-right" />
                </span>
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="far fa-hand-point-right" />
                </span>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="far fa-hand-point-right" />
                </span>
                <span>Rules & Condition</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="far fa-hand-point-right" />
                </span>
                <span>FAQ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="column">
        <div className="imggrid">
          <div className="title">Customer Service</div>
          <p>--------</p>
          <ul className="is-inline-flex">
            <li>
              <a href="#">
                <img
                  src="https://colorlib.com/preview/theme/carries/img/instafeed/1.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://colorlib.com/preview/theme/carries/img/instafeed/2.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://colorlib.com/preview/theme/carries/img/instafeed/3.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <ul className="is-inline-flex">
            <li>
              <a href="#">
                <img
                  src="https://colorlib.com/preview/theme/carries/img/instafeed/4.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://colorlib.com/preview/theme/carries/img/instafeed/5.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://colorlib.com/preview/theme/carries/img/instafeed/6.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
