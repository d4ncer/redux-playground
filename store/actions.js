import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  'SHOW_ALL': 'SHOW_ALL',
  'SHOW_COMPLETED': 'SHOW_COMPLETED',
  'SHOW_ACTIVE': 'SHOW_ACTIVE'
};

let nextTodoId = 0;

const addTodo = createAction(ADD_TODO, (text) =>  {
  return {
    id: nextTodoId++,
    text
  }
});

//export function addTodo(text) {
//  return {
//    type: ADD_TODO,
//    id: nextTodoId++,
//    text
//  }
//}

const completeTodo = createAction(COMPLETE_TODO, (id) => id );

//export function completeTodo(id) {
//  return {
//    type: COMPLETE_TODO,
//    id
//  }
//}

const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, (filter) => filter)

//export function setVisibilityFilter(filter) {
//  return {
//    type: SET_VISIBILITY_FILTER,
//    filter
//  }
//}

export const actions = {
  addTodo,
  completeTodo,
  setVisibilityFilter
};

