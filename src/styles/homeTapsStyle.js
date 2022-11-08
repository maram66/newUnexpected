import { Colors } from "react-native/Libraries/NewAppScreen";
import { Platform } from "react-native";

const React = require("react-native");

const { StyleSheet } = React;


const styles = StyleSheet.create({

    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    mainContainer:{
        flex:1,
        backgroundColor:"#fff"
    },

    //* Start Home Screen Style *//
    

    rowDirectionAppBar:{
        flexDirection: 'row',
        backgroundColor:"yellow",
        padding:25,
    },

    logoAppBarStyle:{
        width:60,
        height:25,
    },

    welcomTextAppBar:{
        fontSize: 16,
        fontWeight:'bold',
        color: "#707070",
    },

    personalDirection:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:10,
    },

    personalIconContainer:{
        backgroundColor:"#fff",
        borderRadius:10,
        width:30,
        height:30,
        
    },
    personalIconStyle:{
        width:30,
        height:30,
    },

    //* End Home Screen Style *//

    //* Start Profile Screen Style *//

    menuContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:50,
        marginRight:30,
    },
    menuIconStyle:{
        width:25,
        height:25,
    },
    marginTopContainer:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },

    imageViewStyle:{
        backgroundColor:"#3a3c43",
        width:70,
        height:70,
        borderRadius:50,
    },

    userNameStyle:{
        fontSize: 18,
        color:"#3a3c43",
        fontWeight:'bold',
        marginTop: 10,
    },

    editStyle:{
        marginTop:10,
    },

    formStyle:{
        marginTop:30,
        padding:30,
    },

    textInputContainer:{
        marginBottom:30,
    },

    titelTextInput:{
        fontWeight:'bold',
    },

    textInputStyle:{
        marginTop: 10,
        borderBottomWidth:0.2,
        borderColor:"#707070",  
    },

    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',

    },










});

export default styles;