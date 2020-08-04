import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import BottomNavigator from './components/BottomNavigator';
import { white } from './utils/colors';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import StackNavigator from './components/StackNavigator';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider style={styles.container}>
          <StackNavigator />
          <StatusBar 
            backgroundColor={white}
            barStyle="auto"
            translucent={false} />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight - 20 || 0,
  },
});