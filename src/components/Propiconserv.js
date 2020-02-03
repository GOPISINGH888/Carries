import React from 'react';
import styled from 'styled-components';

const Propiconserv = props => (
  <div>
    <i className={props.icon} />
    <p className=" has-text-weight-bold is-size-3">{props.largetext}</p>
    <p className="smalltext is-7">{props.smalltext}</p>
  </div>
);
export default Propiconserv;
