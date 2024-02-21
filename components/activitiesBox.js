import React, {useState}  from 'react';
import {View, Text, TouchableOpacity, Switch,} from 'react-native';
import styles from '../style';


const ActivitiesBox = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={[styles.activityBox]}>
                <View style={[styles.container, {flexDirection: 'row',}]}>
                    <View style={{flex: 1,}}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Prac. Plan</Text>
                        </TouchableOpacity>
                        <View style={{alignContent: 'center', alignItems: 'center'}}>
                            <Text style={{textAlign: 'center',}}>RSVP</Text>
                            <Switch
                                style={styles.toggle}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View style={{flex: 2,}}>
                        <Text style={styles.headerFont}>Wrestling Practice</Text>
                        <Text style={styles.headerFont}>Time:</Text>
                        <Text style={styles.headerFontSmall}>6:30-8pm</Text>
                        <Text style={styles.headerFont}>Place:</Text>
                        <Text style={styles.headerFontSmall}>Dodge, Wrestling Room</Text>
                    </View>
                </View>   
            </View>  
    );
};

export default ActivitiesBox