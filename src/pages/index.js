import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Display from '../components/Display';
import Card from '../components/Card';
import Inutform from '../components/Inputform';
import Services from '../components/Services';

const Background = styled.div`
  background: url(https://colorlib.com/preview/theme/carries/img/slider/slide_1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 11rem;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <container>
          <Background>
            <Header />
            <hr />
            <Display />
          </Background>
          <Card />
          <Inutform />
          <Services />
        </container>
      </Layout>
    );
  }
}
