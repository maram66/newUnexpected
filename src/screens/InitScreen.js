import react from "react";
import pec_logo from "../../assets/pec_logo.png";
import seperator_image from "../../assets/seperator_image.png";
import { Text, View, Button, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "../styles/initStyle";
import LoginScreen from "../screens/loginStack/LoginScreen";


const InitScreen = ({navigation}) => {

    return (
        <View style={styles.marginTopPage}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={pec_logo} />
                </View>
                <View style={styles.marginTopBetweenImages}>
                    <Image source={seperator_image} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Project</Text>
                    <Text style={styles.textStyle}>Follow-Up!</Text>
                    <View style={styles.sentenceTextContainer}>
                        <Text style={styles.sentenceTextStyle}>Plan what you will do to be more organized for today, tomorrow and beyond</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('LoginScreen')}>
                        <Text style={styles.buttonTextStyle}>Next</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )

}

export default InitScreen;