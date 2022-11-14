import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/initStyle'

 const ButtonComponent =({title})=> {

    return (
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.buttonTextStyle}>{title}</Text>
        </TouchableOpacity>
    </View>
    )
}

export default ButtonComponent;