import {SLIDE_ACTIVE_NEXT, SLIDE_ACTIVE_PREV, SLIDE_ACTIVE_UPDATE} from '../actions/index';
export default function(state=0, action){

  switch(action.type){

    case SLIDE_ACTIVE_NEXT:
      return action.payload;
    case SLIDE_ACTIVE_PREV:
      return action.payload;
    case SLIDE_ACTIVE_UPDATE:
      return action.payload;
  }
  return state;
}
