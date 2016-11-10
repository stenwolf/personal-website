import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from '../containers/slide';
import SectionHeader from '../components/section-header';
import {connect} from 'react-redux';
import {changeActiveSlide} from '../actions/index';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {componentUnmountDefault, componentDidMountDefault} from '../components/util';
class About extends Component {

  // constructor(props){
  //   super(props);
  //   this.state ={
  //     active: 0
  //   };
  // }

  componentDidMount(){
    var timer = setInterval(this.changeSlide.bind(this), 5000);
    this.setState({timer: timer});
    componentDidMountDefault(ReactDOM.findDOMNode(this));
  }


  componentWillUnmount(){
    clearInterval(this.state.timer);
    this.props.changeActiveSlide(0, 1); //reset active
    componentUnmountDefault();
  }

  changeSlide (){
    this.props.changeActiveSlide(this.props.active, this.props.aboutSlides.length);
  }

  render(){
    // const transitionOptions = {
    //   transitionName: "fade",
    //   transitionLeave: false,
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 500
    // }

    const transitionOptions = {
      transitionName: "slideleft",
      transitionEnterTimeout: 1000,
      transitionLeaveTimeout: 1000
    }
    return(
      <section className='about'>
        <div className='about-me'>
          <SectionHeader name='About Me' />
          <p className='tldr'>
            TLDR: Software engineer by day.
            Amateur astronomer, seasonal adventurer, and wannabe gymnast by night.
          </p>

          <div className='about-slide float-right'>
            <ReactCSSTransitionGroup {...transitionOptions}>
              <Slide key={this.props.active} picture={this.props.aboutSlides[this.props.active]}/>
            </ReactCSSTransitionGroup>
          </div>

          <p>
            My name is Anh Ho, a web developer, based in San Francisco.
            Currently I&#39;m working at Wells Fargo on the new online banking for Mobile,
            Tablet, and Desktop, mainly on the infrastructure and back end side.
            I have about five years of experience working in the tech industry, doing different things
            from web development to database engineer, test automation.
          </p>

          <p>
            I am self motivated and love to explore new technology.
            The most current technology stack I&#39;m working on is React and Redux.
            As the matter of fact, this website you&#39;re looking at is created by React and Redux
            with Node JS, Express for the server, all using JavaScript ES6, and Bootstrap for styling.
            I&#39;m also familiar with the modern responsive web development using CSS3, media query, and HTML5.
            Some other technologies I am comfortable and have experience with are Jquery, MongoDB, SQL, Java, JSP, .NET, Selenium RC/WebDriver, Mockito, Jacoco.
            A few more I have touched and tried out are Angular, Java Spring, Sass, PhantomJS, Karma, Mocha, Chai, C.
            Check out my experience section for more details.
          </p>
          <p>
            Though my background in school was focusing on C and Java programming, I see myself more of a front end developer.
            I enjoy working with graphic design and pay attention to the pixels.
            I like to make colorful and interactive things in general.
          </p>
          <p>
            Beside spending hours in front of a computer coding, I am passionate about astronomy, specifically astrophotography.
            Every month, on a Saturday closest to the new moon, you will find me on top of a mountain, away from everything,
            with my telescope and camera equipment, taking picture of the night sky.
            Once in a while I go to a dark site and camp for a few days to take pictures.
          </p>
          <p>
            Last but not least, I have two lovely dogs. Yuki, the hyper Siberian husky;
            and Bo, the chill Jack Chi.
          </p>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state){
  return {aboutSlides: state.aboutSlides, active: state.active};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeActiveSlide}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
