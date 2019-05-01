import { combineReducers, createStore } from 'redux'
import { FETCH_DATA } from '../actions/types'
// import mockData from '../components/carousel/testdata'

const initialState = {
  active: 1,
  data: []
}

// ACTION reducer
export const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'carouselClickHandler':
      return {
          ...state,
          active: action.active
      }
    default:
      return state;
  }
};

// POST reducer
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
          ...state,
          data: action.payload
      }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  actionReducer,
  postReducer
});
