import { Text, View,TouchableOpacity,Image, Platform } from 'react-native'
import React from 'react'
import styles from './ComponentsStyle'

 const HoriCard =({title, icon})=> {

    return (
      <View style={styles.container}>
       
        <View style={ Platform.OS=='ios'? styles.horiCardStyle : styles.horiCardStyleA}>
            <Text>
                {title}
            </Text>
            <Image source={icon}/>
        </View>
   
       
      </View>
    )
}

export default HoriCard;
hello maram 
i want to see the cafed file .git
u can join the meet plz
we will try something
try to change origin with maram no tamakan 