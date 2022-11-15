import { Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './ComponentsStyle'

 const HoriCard =({title, icon})=> {

    return (
      <View>
        <View style={styles.horiCardStyle}>
            <Text>
                {title}
            </Text>
            <Image source={icon}/>
        </View>
      </View>
    )
}

export default HoriCard;