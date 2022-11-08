import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../styles/initStyle'

export const ButtonComponent =({title})=> {

    return (
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.buttonTextStyle}>{title}</Text>
        </TouchableOpacity>
    </View>
    )
}