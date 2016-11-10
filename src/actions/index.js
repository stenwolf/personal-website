import axios from 'axios';

export const SEND_EMAIL = 'SEND_EMAIL';
export const SLIDE_ACTIVE_NEXT = 'SLIDE_ACTIVE_NEXT';
export const SLIDE_ACTIVE_PREV = 'SLIDE_ACTIVE_PREV';
export const SLIDE_ACTIVE_UPDATE = 'SLIDE_ACTIVE_UPDATE';


const ROOT_URL = '/sendEmail/';

export function sendEmail(props){
  const req = axios.post(ROOT_URL, props);
  return{
    type: SEND_EMAIL,
    payload: req
  }
}

export function changeActiveSlide(active, slides){
  if(active ==(slides-1)){
    active = 0;
  }
  else{
    active++;
  }
  return{
    type: SLIDE_ACTIVE_NEXT,
    payload: active
  }
}

export function changeActiveSlidePrev(active, slides){
  if(active == 0){
    active = slides-1;
  }
  else{
    active--;
  }
  return{
    type: SLIDE_ACTIVE_PREV,
    payload: active
  }
}

export function updateActiveSlide(active){
  return{
    type: SLIDE_ACTIVE_UPDATE,
    payload: active
  }
}
