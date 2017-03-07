// Whenever any action is dispatched, every reducer will run. 

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ 
	posts, 
	comments, 
	routing: routerReducer 
});

export default rootReducer;