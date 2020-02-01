import React from 'react';

const Propsservice = props => (
  <div>
    <p className=" has-text-weight-bold is-size-3">{props.largetext}</p>
    <p className=" is-7">{props.smalltext}</p>
    <p className="is-7">{props.line}</p>
  </div>
);
export default Propsservice;
