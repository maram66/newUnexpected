import React, { Component } from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles/loginStyle";
import pec from "../../../assets/pec.png";
import network_orange from "../../../assets/network_orange.png";
import twitter_icon from "../../../assets/twitter_icon.png";
import insta_icon from "../../../assets/insta_icon.png";
import linkedin_icon from "../../../assets/linkedin_icon.png";
import saved_icon from "../../../assets/saved_icon.png";
import password_Lock from "../../../assets/password_Lock.png";
import hide_icon from "../../../assets/hide_icon.png";
import ButtonComponent from "../../components/ButtonComponent";

const LoginScreen = () => {

  return (
    <View style={styles.mainFlex}>
      <View style={styles.upContainer}>
        <View style={styles.pecMarginTop}>
          <Image source={pec} />
        </View>
        <View style={styles.networkImageContainer}>
          <Image source={network_orange} style={styles.networkImageStyle} />
        </View>

      </View>

      <View style={styles.formContainer}>

        <Text style={styles.loginFormTextStyle}>Login</Text>

        <View style={styles.inputContainer}>


        {/* Adding icon insid inputText */}
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email or Phone" />

          <TextInput
            style={[styles.textInputStyle, styles.margingBetweenInputs]}
            placeholder="Password" />

          <TouchableOpacity >
            <Text style={styles.fogetPasswordStyle}>Forget Password?</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.centerContainer}>
          <TouchableOpacity style={styles.loginButtonContainer}>
            <Text style={styles.loginButtonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.socialFlexRow}>
          <View style={styles.iconsStyle}>
            <Image source={twitter_icon} style={styles.iconsSize} />
          </View>
          <View style={styles.iconsStyle}>
            <Image source={insta_icon} style={styles.iconsSize} />
          </View>
          <View style={styles.iconsStyle}>
            <Image source={linkedin_icon} style={styles.iconsSize} />
          </View>

        </View>

      </View>
    </View>
  )
}
export default LoginScreen;