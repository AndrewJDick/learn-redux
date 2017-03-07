import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the Root Reducer
import rootReducer from './reducers/index';

// Import data
import comments from './data/comments';
import posts from './data/posts';

// Create  an object for the default data
const defaultState = {
	
	// ES6: If the property key and the variable value are identical, you do not need to add a colon, e.g
	// 'posts: posts' simply becomes 'posts'
	posts, 
	comments
}

// Our store is an empty object that is going to store all of our site's information
const store = createStore(rootReducer, defaultState);

// browserHistory is keeping track of which pages have been visted via React Router
export const history = syncHistoryWithStore(browserHistory, store);

export default store;