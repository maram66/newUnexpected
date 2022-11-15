import React, {useState} from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/homeTapsStyle';
import ButtonComponent from '../../components/ButtonComponent';
import menu_profile_icon from '../../../assets/menu_profile_icon.png';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu';
// import {useTranslation, I18nextProvider} from 'react-i18next';
// import i18next from 'i18next';
// import i18n from '../../../assets/i18n/i18n';

export default function ProfileScreen() {


  // const {t, i18n} = useTranslation();
  ////////////////
  // const [currentLanguage,setLanguage] =useState('en');
  
  // const changeLanguagef = value => {
  //   i18n
  //     .changeLanguage(value)
  //     .then(() => setLanguage(value))
  //     .catch(err => console.log(err));


  //     console.log(currentLanguage);
  // };
  
////////

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <Image source={menu_profile_icon} style={styles.menuIconStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.marginTopContainer}>
            <TouchableOpacity style={styles.imageViewStyle}>
              <Image />
            </TouchableOpacity>

            <Text style={styles.userNameStyle}>Stave Job</Text>
            <View style={styles.editStyle}>
              <Image />
              <Text>Edit</Text>
            </View>
          </View>



          <View style={styles.formStyle}>
            <View style={styles.textInputContainer}>
              <Text style={styles.titelTextInput}>Email</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder={"example@company.com"} />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.titelTextInput}>Phone</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder={"050505050"} />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.titelTextInput}>Password</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder={"***********"} />
            </View>
          </View>

          <ButtonComponent
            title={"Save"} />


        </ScrollView>
      </SafeAreaView>

    </View>
  );
}