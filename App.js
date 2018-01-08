import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import reducers from './src/reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import Timezones from 'components/timezones/Timezones';
import { loadTimezonesToStore } from 'actions';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(createLogger({ collapsed: true })),
        autoRehydrate()
      )
    );
    persistStore(
      store,
      {
        whitelist: ['timezone'],
        storage: AsyncStorage
      },
      () => {
        console.log('restored');
      }
    );

    return (
      <Provider store={store}>
        <Timezones />
      </Provider>
    );
  }
}
