import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class SectionHeader extends Component {
  render(){
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }
    return (
      <ReactCSSTransitionGroup {...transitionOptions}>
        <legend key={this.props.name}>{this.props.name}</legend>
      </ReactCSSTransitionGroup>
    );



  }
}
