const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({

    mainFlex:{
        flex:1
    },

    upContainer:{
        flex:1,
        backgroundColor:"#F7F7F7",
        justifyContent:'center',
        alignItems:'center',
    },

    logoContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',     
    },

    pecMarginTop:{
        marginTop:50,
    },

    networkImageContainer:{
        marginTop:40,
    },

    networkImageStyle:{
        opacity:50,
    },

    formContainer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginTop:-100,
        flexDirection:'column'
    },

    socialFlexRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,     
    },

    iconsStyle:{
        backgroundColor:"#ed802f",
        width: 30,
        height:30,
        margin: 5,
        borderRadius: 50,
        padding: 5,
    },

    iconsSize:{
        width:20,
        height:20,
    },

    loginFormTextStyle:{
        fontSize: 32,
        paddingLeft:30,
        paddingTop:40,
        color:"#707070",
        fontWeight:'bold',     
    },

    inputContainer:{
        paddingLeft:30,
        marginTop:30,
    },

    textInputStyle:{
        borderBottomWidth:0.2,
        borderBottomColor:"#707070",
        paddingBottom:10,
        marginRight:30
    },

    rowInputText:{
        flexDirection:'row'
    },

    inputIcon:{
        width:15,
        height:15,
        padding:10,
        margin:10,
    },

    margingBetweenInputs:{
        marginTop:25,
    },

    fogetPasswordStyle:{
        position: 'absolute', 
        right: 0,
        marginRight:30,
        marginTop:10,
        color:"#b2b2b2",
    },

    centerContainer:{
        justifyContent:'center',
        alignItems:'center' 
    },

    loginButtonContainer:{
        backgroundColor:"#ed802f",
        width:250,
        height:50,
        borderRadius:10,
        marginTop:60, 
    },

    loginButtonTextStyle:{
        textAlign:'center',
        padding:15,
        color:"#fff",
        fontSize: 18,
    },



});

export default styles;