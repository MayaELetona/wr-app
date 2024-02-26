import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
    },
    h2: {
        fontSize: 20,
    },
   
    //HOME PAGE STYLES
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
    //ACTIVITIES BOX STYLES
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
    //PROFILE STYLES
    profileLogo: {
        width: 66,
        height: 58,
        alignItems: 'center',
    },
    profileGenHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pageModule: {
        marginTop: 15,
        height: '20%',
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //MYPROFILE PAGE
    myProfileHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    profileHeaderFont: {
        fontSize: 30,
    },
    profileBox: {
        marginTop: 20,
        flexDirection: 'column',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titleInputBox: {
        width: '100%',
        flexDirection: 'row',
    },
})
export default styles;