import React from 'react';
import styled from 'styled-components';

import Card from './Cards';

const Subjects = () => (
  <section className="section">
    <div className="container has-text-centered">
      <h1 className="title is-2 has-text-danger">Select your subject</h1>
      <div className="columns is-multiline">
        <div className="column is-6">
          <Card />
        </div>
        <div className="column is-6">
          <Card />
        </div>
      </div>
    </div>
  </section>
);

export default Subjects;
