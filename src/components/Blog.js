import React from 'react';
import styled from 'styled-components';

const Blogstyle = styled.p`
  .subtitle {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  a {
    padding-bottom: 3rem;
  }
  h2 {
    padding-bottom: 3rem;
  }
`;

const Blog = () => (
  <Blogstyle className="container">
    <h2 className="has-text-centered is-size-3 has-text-weight-semibold ">
      NEWS & UPDATES
    </h2>
    <p className="subtitle is-size-5 has-text-weight-semibold has-text-grey">
      FEBRUARY 2020
    </p>
    <p className="Title is-size-3 has-text-weight-bold has-text-grey">
      47+ IPHONE CASE & COVER FOR YOUR IPHONE | 6IN BLOG
    </p>
    <p className="info has-text-grey">
      Grab to celebrate this day specifically, we have been trying out iPhone
      cases that give you feel like the richness, I recommend more on 6in’s
      iPhone cases because of its value of money and the high quality of the
      products, we suggest buying one of our fashionable phone cases for the
      iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, iPhone Xs/X, or iPhone XS Max
      to honor the day, it feels excellent when holding in hand, Get the stylish
      look and luxurious feeling of our iPhone cases with you everywhere you
      are, You feel more secure to use with these Strong Cases especially when
      you'll be traveling!
    </p>
    <a className=" has-text-warning">read</a>
    <p className="subtitle is-size-5 has-text-weight-semibold has-text-grey">
      SEPTEMBER 2019
    </p>
    <p className="Title is-size-3 has-text-weight-bold has-text-grey">
      Welcome to 6in.co
    </p>
    <p className="info has-text-grey">
      Welcome to our website! We are really happy to launch our brand new
      e-commerce platform. - zeiq team
    </p>
    <a className=" has-text-warning">read</a>
  </Blogstyle>
);
export default Blog;
