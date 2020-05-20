import * as React from 'react';
import LamiaNavbar from './src/Navbar/Navbar'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reduser from './store/reduser'

const store = createStore(reduser)

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <LamiaNavbar />
      </Provider>
  );
  }
}