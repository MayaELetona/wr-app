import React, {useState}  from 'react';
import {View, Text, TouchableOpacity, Switch,} from 'react-native';
import styles from '../../style';
import ActivitiesBox from './activitiesBox';
const Itinerary = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (        
        <View>
            <View style={[styles.header, styles.row]}>
                <View style={styles.column}>
                    <Text style={styles.headerFont}>Attendance</Text>
                    <View style={[styles.attendanceModule, styles.row]}>
                        <Text style={styles.attendanceScore}>85%</Text>
                    </View>
                </View>
                <View style={[styles.column, styles.row]}>
                    <Text style={styles.headerFont}>Periodization Plan</Text>
                    <Text style={styles.headerFontSmall}>High Interval</Text>
                    <Text style={styles.headerFont}>Practice Plan</Text>
                    <Text style={styles.headerFontSmall}>Gut Defense</Text>
                </View>
            </View>
            <Text style={[styles.header, styles.headerFont]}>Todays Activities</Text>
            <ActivitiesBox/>
            
        </View>
    );
};

export default Itinerary;