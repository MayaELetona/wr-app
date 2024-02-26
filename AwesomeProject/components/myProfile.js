import React, {useState}  from 'react';
import {View, Text, SafeAreaView, TextInput, Switch,} from 'react-native';
import styles from '../style';
import DropdownComponent from './dropDown';
const MyProfile = () => {
    const [text, onChangeText] = React.useState('Enter Weight');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <View style={styles.myProfileHeader}>
                <Text style={styles.profileHeaderFont}>My Profile</Text>
            </View>
            <View style={styles.profileBox}>
                <Text style={{fontSize: 20}}>Name: Maya Letona</Text>
                <Text style={[styles.h2, {marginTop: 10}]}>Weight Class:</Text>
                <View style={styles.titleInputBox}>
                    <SafeAreaView style={{flex: 5}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />   
                    </SafeAreaView>  
                    <View style={{alignContent: 'center', alignItems: 'center', flex: 1}}> 
                        <Text style={{textAlign: 'center',}}>Show</Text>
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
                
                <Text style={[styles.h2, {marginTop: 10}]}>Current Weight:</Text>
                <View style={styles.titleInputBox}>
                    <SafeAreaView style={{flex: 5}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />   
                    </SafeAreaView>  
                    <View style={{alignContent: 'center', alignItems: 'center', flex: 1}}> 
                        <Text style={{textAlign: 'center',}}>Show</Text>
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
                <DropdownComponent/>
            </View>
        </View>
    );
}
export default MyProfile;