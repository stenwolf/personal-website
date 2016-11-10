import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {reduxForm} from 'redux-form';
import {sendEmail} from '../actions/index';
import {componentUnmountDefault, componentDidMountDefault} from './util';

class ContactForm extends Component{
  componentDidMount(){    
    componentDidMountDefault(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount(){
    componentUnmountDefault();
  }

  render(){
    const { fields:{Name, Phone, Message}, handleSubmit} = this.props;

    return(

      <section className='contact'>

        <form className='form-horizontal' onSubmit={handleSubmit(this.props.sendEmail)}>
          <fieldset>
            <legend>Contact</legend>
            <div className='contact-me'>
              <div className='form-group'>
                <label className='col-sm-4 control-label' htmlFor='name'>Name</label>
                <div className='col-sm-6'>
                  <input id='name' name='name' type='text' placeholder='Your name' className='form-control input-md' {...Name}/>
                  <span className='help-block'>error message here</span>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-4 control-label' htmlFor='phone'>Phone/Email</label>
                <div className='col-sm-6'>
                  <input id='phone' name='phone' type='text' placeholder='Your phone or email' className='form-control input-md' {...Phone}/>
                  <span className='help-block'>error message here</span>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-4 control-label' htmlFor='message'>Message</label>
                <div className='col-sm-6'>
                  <textarea className='form-control' id='message' name='message' placeholder='Shoot me a message' {...Message}/>
                  <span className='help-block'>error message here</span>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-4 control-label' htmlFor='message'>&nbsp;</label>
                <div className='col-sm-6'>
                  <button id='send' name='send' className='btn btn-primary'>Send</button>
                </div>
              </div>
            </div>

          </fieldset>
        </form>


      </section>

    );
  }
}

export default reduxForm({
  form: 'ContactForm',
  fields: ['Name', 'Phone', 'Message']
}, null, {sendEmail})(ContactForm);
