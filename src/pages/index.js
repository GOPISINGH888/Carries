import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Semester from '../components/Semester';
import Card from '../components/Card';

const Background = styled.div`
  background: url(https://colorlib.com/preview/theme/carries/img/slider/slide_1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
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
            <Semester />
          </Background>
          <Card />
        </container>
      </Layout>
    );
  }
}
