//import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
//import calculator from '../utils/fuelSavingsCalculator';
// import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function peopleReducer(state = initialState.people, action) {
  if (action.response) {
//      return Object.assign({}, state, action.response.entities.people);
      return Object.assign({}, state, action.response.entities.people);
  }

  return state;
}

//Returns empty object if not found
export function getCurrentPerson (state, userName) {
  return Object.assign({}, state.people[userName]);
}