const React = require("react-native");

const { StyleSheet } = React;


const styles = StyleSheet.create({


    marginTopPage:  {
        marginTop: 150,
        justifyContent:'center',   
    },

    logoContainer:{
       justifyContent:'center',
       alignItems:'center',
    },

    marginTopBetweenImages:{
        marginTop:40,
    },

    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,      
    },

    textStyle:{
        fontSize:32,
    },

    mrginTopSentenceText:{
        marginTop:60,
    },

    sentenceTextContainer:{
        width:300,
        height:100,
        marginTop: 20,   
    },

    sentenceTextStyle:{
        justifyContent:'center',
        textAlign:'center',
        color:"#707070",   
    },

    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
    },

    buttonStyle:{
        backgroundColor:"#ed802f",
        width:250,
        height:50,
        borderRadius:10,    
    },

    buttonTextStyle:{
        textAlign:'center',
        padding:15,
        color:"#fff",
        fontSize: 16,
    },




});

export default styles;