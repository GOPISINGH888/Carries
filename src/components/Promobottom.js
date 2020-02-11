import React from 'react';
import styled from 'styled-components';

const Promobottomstyle = styled.div`
  .style {
    background: rgb(68, 84, 110);
      url(https://colorlib.com/preview/theme/carries/img/promo/promo_bottom_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    background-opacity:0.6;
    padding-bottom:8rem;
    padding-top:8rem;
  }
  p{
    margin-bottom:2rem;
  }
`;
const Promobottom = () => (
  <Promobottomstyle className=" has-text-centered	">
    <div className="section style">
      <p className="is-size-4 has-text-weight-semibold has-text-white ">
        WE PROVIDE INTERNATIONAL FREIGHT & LOGISTICS SERVICE WORLDWIDW
      </p>
      <div className="button is-new is-medium">GET A QUOTE</div>
    </div>
  </Promobottomstyle>
);
export default Promobottom;
