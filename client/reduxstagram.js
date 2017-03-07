import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router dependancies 
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
// No brackets required for store, since it is a default export, where history is a named export. 
import store, { history } from './store'; 

const router = ( 
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root')); 