import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTapsNavigator from '../screens/homeTaps/HomeTapsNavigator';
import Profile from '../screens/loginStack/Profile';
import Sopport from '../screens/loginStack/Sopport';
import PaymentNow from '../screens/loginStack/PaymentNow';
import PaymentHestory from '../screens/loginStack/PaymentHestory';



const Stack = createNativeStackNavigator();

export function LoginStack({ user, setUser }) {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeTapsNavigator'>

            <Stack.Screen name='HomeTapsNavigator'
                component={HomeTapsNavigator}
                user={user}
                setUser={setUser} />

            <Stack.Screen name='Profile'
                component={Profile}
                user={user}
                setUser={setUser} />

            <Stack.Screen name='Sopport'
                component={Sopport}
                user={user}
                setUser={setUser} />

            <Stack.Screen name='PaymentNow'
                component={PaymentNow}
                user={user}
                setUser={setUser} />

            <Stack.Screen name='PaymentHestory'
                component={PaymentHestory}
                user={user}
                setUser={setUser} />
        </Stack.Navigator>
    );

};