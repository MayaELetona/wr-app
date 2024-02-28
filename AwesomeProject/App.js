import React from 'react';
import {View} from 'react-native';
import styles from './style';
import NavBar from './components/navBar';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <View style={styles.appContent}>
      <NavigationContainer>
        <NavBar/>
      </NavigationContainer>
    </View>
  )
}
export default App;

