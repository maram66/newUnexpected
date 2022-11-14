import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from '../../styles/homeTapsStyle';
import pec from '../../../assets/pec.png';
import personal from '../../../assets/personal.png';
import SearchBar from '../../components/SearchBar';


export default function HomeScreen() {


  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>

          <View style={styles.rowDirectionAppBar}>
            <View>
              <Image source={pec} style={styles.logoAppBarStyle} />
              <Text style={styles.welcomTextAppBar}>Hi, Steven</Text>
            </View>


            <View style={styles.personalDirection}>
              <View style={styles.personalIconContainer}>
                <Image source={personal} style={styles.personalIconStyle} />

              </View>
            </View>

          </View>

          <SearchBar/>

          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}