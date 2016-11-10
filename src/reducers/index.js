import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import aboutSlides from './reducer_about-me-slideshow';
import active from './reducer_active-slide';
import experience from './reducer_experience';
import education from './reducer_education';
import astro from './reducer_astro';
import explore from './reducer_explore';
import yukibo from './reducer_yukibo';
import others from './reducer_others';
const rootReducer = combineReducers({
  form: formReducer,
  aboutSlides: aboutSlides,
  active: active,
  experience: experience,
  education: education,
  astro: astro,
  explore: explore,
  yukibo: yukibo,
  others: others
});

export default rootReducer;
