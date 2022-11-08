import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginStack/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';

const Stack = createNativeStackNavigator();


export function LogOut({user, setUser}) {
     

    return(
        <Stack.Navigator screenOptions={{headerShow: false}}>
           {/** set user us parameter after connect with api */} 
            <Stack.Screen name='LoginScreen' component={LoginScreen}
            user={user}
            setUser={setUser}/>
        </Stack.Navigator>
    );


};

export function AuthNavigator ({setNewUser}) {

//here auth of user info and change setNewUser //
    return (
        <NavigationContainer>
            {user ? <LoginStack user={user} setUser={setUser}/> : <LoginScreen user={user} setUser={setUser}/>}
        </NavigationContainer>
      
    )
  
}
