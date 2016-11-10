import React, {Component} from 'react'
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux';
import {updateActiveSlide} from '../actions/index';

class SlideList extends Component{

  scrollToSlideshow(slide){
    $('html, body').animate({
       scrollTop: $("legend").offset().top
   }, 500);
   this.props.updateActiveSlide(slide);
  }

  renderList(){

      return this.props.pics.map((pic, i) =>{

        return (
          <li
            key={i}
            className='slide-list-item'
            onClick={this.scrollToSlideshow.bind(this, i)}>
              <img src={pic.url} alt={pic.caption} />
          </li>
        );
      });
  }

  render(){
    return(
      <ul className='list-group slide-list'>
        {this.renderList()}
      </ul>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({updateActiveSlide}, dispatch);
}


export default connect(null, mapDispatchToProps)(SlideList);
