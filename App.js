import React from 'react';
import {View} from 'react-native';
import Itinerary from './.expo/components/itinerary';
import Home from './.expo/components/home';
import MyProfile from './.expo/components/myProfile';
import Calendar from './.expo/components/calendar';
import styles from './style';


const App = () => {
  
  const [page, setPage] = React.useState('Itinerary')
  const screenChoose = (screen) => {
    setPage(screen)
  };

  const screenRender = () => {
      if (page == 'Itinerary') {
        return <Itinerary/>
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

