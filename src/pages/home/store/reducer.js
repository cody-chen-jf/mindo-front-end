import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  homeData: {}
});

const changeHomeData = (state, action) => {
  return state.merge({
    homeData: fromJS(action.data)
  });
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    default:
      return state;
  }
}