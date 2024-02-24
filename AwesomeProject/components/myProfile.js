import React, {useState}  from 'react';
import {View, Text, TouchableOpacity, Switch,} from 'react-native';
import styles from '../style';

const MyProfile = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerFont}>My Profile</Text>
            </View>
        </View>
    )
}
export default MyProfile;