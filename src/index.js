import './index.css';
import store from './redux/redux_store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
export let rerenderTree = (state) => {
  
  ReactDOM.render(
    <Provider store={store}>
    <App navstore={store} />
    </Provider>
    

    ,document.getElementById('root')
  );
}


rerenderTree(store.getState());

store.subscribe(()=>{ 
  let state=store.getState();
  rerenderTree(state);
});
