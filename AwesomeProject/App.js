import React from 'react';
import {View} from 'react-native';
import ProfileGen from './components/profileGen';
import Home from './components/home';
import MyProfile from './components/myProfile';
import Calendar from './components/calendar';
import styles from './style';


const App = () => {
  
  const [page, setPage] = React.useState('MyProfile')
  const screenChoose = (screen) => {
    setPage(screen)
  };

  const screenRender = () => {
      if (page == 'ProfileGen') {
        return <ProfileGen/>
      }
      else if (page == 'Home') {
        return <Home/>
      }
      else if (page == 'MyProfile') {
        return <MyProfile/>
      }

      else if (page == 'Calendar') {
        return <Calendar/>
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.appContent}>
        
        {screenRender()}
      </View>
    </View>

    
  )}
export default App;

