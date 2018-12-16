import axios from 'axios';
import * as actionTypes from './actionTypes';

const changHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  data: result.data
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data;
      console.log('res === ', res)
      dispatch(changHomeData(result));
    });
  }
}