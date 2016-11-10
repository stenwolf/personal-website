import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimelinePanel from './timeline-panel';
import TimelineBadge from './timeline-badge';
import {connect} from 'react-redux';
import SectionHeader from './section-header';
import {componentUnmountDefault, componentDidMountDefault} from './util';
class Experience extends Component {

  constructor(props){
    super(props);
    this.state ={
      invert: false
    };
  }

  componentDidMount(){
    componentDidMountDefault(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount(){
    componentUnmountDefault();
  }

  // componentWillUnmount(){
  //   var component = ReactDOM.findDOMNode(this);
  //   window.requestAnimationFrame(function() {
  //       component.style.transition = "opacity 500ms";
  //       component.style.opacity = 0;
  //   });
  // }


  renderExpItem(){
      return this.props.experience.map((exp, i) =>{
          if(i%2 == 0){
            return(
              <li key={i}>
                <TimelineBadge />
                <TimelinePanel heading={exp.heading} date={exp.date} body={exp.body}/>
              </li>
            )
          }
          else{
            return(
              <li className='timeline-inverted' key={i}>
                <TimelineBadge />
                <TimelinePanel heading={exp.heading} date={exp.date} body={exp.body}/>
              </li>
            )
          }


      });
  }

  render() {
    return (
      <section className='experience'>


        <div className='exp-summary'>
          <SectionHeader name='My Experience' />
          <ul className='timeline'>
            {this.renderExpItem()}
            <li className='cf no-float'></li>
          </ul>
        </div>
      </section>

    );
  }
}

function mapStateToProps(state){
  return {experience: state.experience};
}


export default connect(mapStateToProps)(Experience);
