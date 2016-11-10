import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimelinePanel from './timeline-panel';
import TimelineBadge from './timeline-badge';
import {connect} from 'react-redux';
import SectionHeader from '../components/section-header';
import {componentUnmountDefault, componentDidMountDefault} from './util';
class Education extends Component {

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


  renderEduItem(){
      return this.props.education.map((exp, i) =>{
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
      <section className='education'>


        <div className='edu-summary'>
          <SectionHeader name='My Education' />
          <ul className='timeline'>
            {this.renderEduItem()}
            <li className='cf no-float'></li>
          </ul>
        </div>
      </section>

    );
  }
}

function mapStateToProps(state){
  return {education: state.education};
}


export default connect(mapStateToProps)(Education);
