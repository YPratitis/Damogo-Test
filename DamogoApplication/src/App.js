import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView, StatusBar, StyleSheet, Text
} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
    
  );
};

export default App;
