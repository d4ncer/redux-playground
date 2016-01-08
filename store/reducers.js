import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, actions } from './actions'
import { handleActions } from 'redux-actions';
const { SHOW_ALL } = VisibilityFilters;

export default handleActions({
  ADD_TODO: (state, { payload }) => {

  }
});


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case COMPLETE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: true
      };
    default:
      return state;
  }
}

function todos(state=[], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(null, action)
      ];
    case COMPLETE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp