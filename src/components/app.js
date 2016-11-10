import React, { Component } from 'react';
import Banner from './banner';
import NavBar from './nav-bar';
import Footer from './footer';
import SectionHeader from '../components/section-header';
export default class App extends Component {
  render() {
    return (
      <div>

        <Banner />
        <NavBar />

        {this.props.children}        


        <Footer />
      </div>
    );
  }
}
