import React from 'react';
import styled from 'styled-components';
import Propiconserv from './Propiconserv';

const Iconserv = styled.div`
  margin-top: 9rem;
  .icons {
    background: url(https://colorlib.com/preview/theme/carries/img/service/service-area-bg.jpg);
    padding-bottom: 50rem;
  }
`;
const Iconservice = () => (
  <Iconserv className="columns">
    <div className="column icons is-hidden-mobile" />
    <div className="column">
      <div className="container">
        <Propiconserv icon="fab fa-dropbox" largetext="WARE HOUSE" />
        <Propiconserv icon="fas fa-truck-moving" largetext="ROAD FREIGHT" />
        <Propiconserv icon="fa fa-ship" largetext="SEA FREIGHT" />
        <Propiconserv icon="fa fa-plane" largetext="AIR FREIGHT" />
      </div>
    </div>
  </Iconserv>
);
export default Iconservice;
