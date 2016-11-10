import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from '../containers/slide';
import SectionHeader from '../components/section-header';
import {connect} from 'react-redux';
import {aboutSlideshow} from '../actions/index';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SlideList from '../containers/slide-list'
import {changeActiveSlide, changeActiveSlidePrev} from '../actions/index';
import {componentUnmountDefault, componentDidMountDefault} from '../components/util';
class Others extends Component {


  componentDidMount(){
    componentDidMountDefault(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount(){
    this.props.changeActiveSlide(0, 1); //reset active
    componentUnmountDefault();
  }

  prevSlide(){
    this.props.changeActiveSlidePrev(this.props.active, this.props.others.length);
  }

  nextSlide(){
    this.props.changeActiveSlide(this.props.active, this.props.others.length);
  }

  render(){
    const transitionOptions = {
      transitionName: "fade",
      transitionLeave: false,
      transitionEnterTimeout: 200
      // transitionLeaveTimeout: 500
    }

    const nextSlide = _.debounce(() => {this.nextSlide()}, 250);
    const prevSlide = _.debounce(() => {this.prevSlide()}, 250);

    return(
      <section className='random-stuff'>
        <div className='others'>
          <SectionHeader name='Random stuff' />
        </div>

        <div className='active-slide'>
          <button className='ion-chevron-left' onClick={prevSlide}/>
          <button className='ion-chevron-right' onClick={nextSlide}/>
          <div className='slide-show'>
            <ReactCSSTransitionGroup {...transitionOptions}>
              <Slide key={this.props.active} picture={this.props.others[this.props.active]}/>
            </ReactCSSTransitionGroup>
          </div>
        </div>

        <SlideList pics={this.props.others}/>

      </section>
    );
  }

}

function mapStateToProps(state){
  return {others: state.others, active:state.active};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeActiveSlide, changeActiveSlidePrev}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Others);
