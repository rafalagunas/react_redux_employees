/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';
import EmployeesList from './components/employeeslist';

const App = () => (
  <Provider store={createStore(Reducers)}>
    <View>
      <EmployeesList/>
    </View>
  </Provider>
)

export default App;