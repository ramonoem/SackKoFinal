

import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import store from './app/store';
import { YellowBox } from 'react-native';
import AppRouting from './app/config/appRouting';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends Component{
  render() {
    return (
      <Provider {...store}>
      <AppRouting/>
      </Provider>
    );
  }
}

