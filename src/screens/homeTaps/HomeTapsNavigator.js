import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "../homeTaps/HomeScreen"
import ChatScreen from "../homeTaps/ChatScreen"
import NotificationScreen from "../homeTaps/NotificationScreen"
import ProfileScreen from './ProfileScreen'


const Tap = createBottomTabNavigator();

export default function HomeTapsNavigator() {

    return (
            <Tap.Navigator screenOptions={{headerShown:false}}>
                <Tap.Screen name='HomeScreen' component={HomeScreen} />
                <Tap.Screen name='ChatScreen' component={ChatScreen} />
                <Tap.Screen name='NotificationScreen' component={NotificationScreen} />
                <Tap.Screen name='ProfileScreen' component={ProfileScreen} />
            </Tap.Navigator>
    )
}