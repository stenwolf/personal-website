import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Banner from './components/banner';
import App from './components/app';
import ContactForm from './components/contact-form'
import About from './containers/about'
import Experience from './components/experience'
import Education from './components/education'
import Astrophotography from './containers/astrophotography'
import Exploring from './containers/exploring'
import Yukibo from './containers/yukibo'
import Others from './containers/others'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path='/experience' component={Experience} />
    <Route path='/education' component={Education} />
    <Route path='/astrophotography' component={Astrophotography} />
    <Route path='/exploring' component={Exploring} />
    <Route path='/yukibo' component={Yukibo} />
    <Route path='/others' component={Others} />
    <Route path='/contact' component={ContactForm} />
  </Route>
);
