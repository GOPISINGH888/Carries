import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Display from '../components/Display';
import Card from '../components/Card';
import Inutform from '../components/Inputform';
import Services from '../components/Services';
import Iconservice from '../components/Iconservice';
import Delivry from '../components/Delivry';
import Promobottom from '../components/Promobottom';
// import Slikslider from '../components/Slikslider';
import Upperfooter from '../components/Upperfooter';
import Footer from '../components/Footer';
// import Blog from '../components/Blog';

const Background = styled.div`
  background: url(https://colorlib.com/preview/theme/carries/img/slider/slide_1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 11rem;
`;
const Footerbackground = styled.div`
  /* background: url(https://colorlib.com/preview/theme/carries/img/footer-map-bg.png); */
  background-color: #5d6b82;
  /* opacity: 0.6; */
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
          <Iconservice />
          <Delivry />
          <Promobottom />
          {/* <Slikslider /> */}
          <Footerbackground>
            <Upperfooter />
            <Footer />
          </Footerbackground>
          {/* <Blog /> */}
        </container>
      </Layout>
    );
  }
}
