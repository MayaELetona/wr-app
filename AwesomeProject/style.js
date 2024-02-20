import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'darkgray',
    },
    appContent: {
		marginTop: 81,
		marginLeft: 30,
		marginRight: 30,
		flex: 1,
	},
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerFont: {
        fontSize: 18,
        textAlign: 'center',
    },
    headerFontSmall: {
        fontSize: 12,
        textAlign: 'center',
    },
    attendanceModule: {
        height: 80, 
        width: 80,
        borderWidth: 3,
        borderColor: 'black',
        margin: 10,
        marginLeft: 5,
    },
    attendanceScore: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25,
    },
    activityBox: {
        marginTop: 15,
        height: 100,
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        margin: 5,
        height: 30,
        width: '100%',
    },
    activitiesText: {
        marginLeft: 10,
    },
    toggle: {
        height: 30,
        margin: 5,
    },

})
export default styles;