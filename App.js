import InitScreen from './src/screens/InitScreen';
import LoginScreen from './src/screens/loginStack/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './src/navigations/AuthNavigator';
import HomeTapsNavigator from './src/screens/homeTaps/HomeTapsNavigator';



export default function App() {


  const [newUser, setNewUser] = React.useState(false);

 
  return (
    
<NavigationContainer>
      {/* { newUser ? <InitScreen/> : <AuthNavigator setNewUser={setNewUser} /> } */}
      <HomeTapsNavigator/>
    </NavigationContainer>
 
    

  );
}

