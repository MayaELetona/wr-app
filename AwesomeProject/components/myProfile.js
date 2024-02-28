import React, {useState}  from 'react';
import {View, Text, SafeAreaView, TextInput, Switch,} from 'react-native';
import styles from '../style';
import DropdownComponent from './dropDown';
const MyProfile = () => {
    const [WeightClasstext, WConChangeText] = React.useState('Enter Weight');
    const [WeightClassisEnabled, WCsetIsEnabled] = useState(false);
    const WeightClasstoggleSwitch = () => WCsetIsEnabled(previousState => !previousState);

    const [CurrentClasstext, onChangeText] = React.useState('Enter Weight');
    const [CurrentClassisEnabled, setIsEnabled] = useState(false);
    const CurrentClasstoggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                            onChangeText={WConChangeText}
                            value={WeightClasstext}
                        />   
                    </SafeAreaView>  
                    <View style={{alignContent: 'center', alignItems: 'center', flex: 1}}> 
                        <Text style={{textAlign: 'center',}}>Show</Text>
                                <Switch
                                    style={styles.toggle}
                                    trackColor={{false: '#767577', true: '#81b0ff'}}
                                    thumbColor={WeightClassisEnabled ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={WeightClasstoggleSwitch}
                                    value={WeightClassisEnabled}
                                />
                    </View> 
                </View>
                
                <Text style={[styles.h2, {marginTop: 10}]}>Current Weight:</Text>
                <View style={styles.titleInputBox}>
                    <SafeAreaView style={{flex: 5}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={CurrentClasstext}
                        />   
                    </SafeAreaView>  
                    <View style={{alignContent: 'center', alignItems: 'center', flex: 1}}> 
                        <Text style={{textAlign: 'center',}}>Show</Text>
                                <Switch
                                    style={styles.toggle}
                                    trackColor={{false: '#767577', true: '#81b0ff'}}
                                    thumbColor={CurrentClassisEnabled ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={CurrentClasstoggleSwitch}
                                    value={CurrentClassisEnabled}
                                />
                    </View> 
                </View>
                <DropdownComponent/>
            </View>
        </View>
    );
}
export default MyProfile;