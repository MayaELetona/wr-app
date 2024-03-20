
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/navBar';
import { PaperProvider } from 'react-native-paper';
import styles from  './style';
const App = () => {

  return (
    <View style={styles.appContent}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </View>
  );
};

export default App;