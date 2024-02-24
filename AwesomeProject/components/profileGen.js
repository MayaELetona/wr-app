import React, {useState}  from 'react';
import {View, Image, Text, TouchableOpacity, Switch,} from 'react-native';
import styles from '../style';
import Profile_Image from '../assets/profile.png';


const ProfileGen = () => {
    const PROFILE_IMAGE = Image.resolveAssetSource(Profile_Image).uri;
    return (
        <View>
            <View style={[styles.profileGenHeader, {marginBottom: 25}]}>
                <Image style={styles.profileLogo} source={{uri: PROFILE_IMAGE}}/>
            </View>
            <TouchableOpacity style={[styles.pageModule, styles.headerFont]}>
                <Text style={{fontSize: 30}}>My Plans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pageModule}>
                <Text style={{fontSize: 30}}>My Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pageModule}>
                <Text style={{fontSize: 30}}>Contact Coaches</Text>
            </TouchableOpacity>
        </View>
        
    )
}
export default ProfileGen;