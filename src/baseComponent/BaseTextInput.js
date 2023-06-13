import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Images } from '../constants/Images'
import { Colors } from '../constants/Colors'



const BaseTextInput = ({ value, onChangeText, isSecure = true }) => {
    const [passSecure, setPassSecure] = useState(true)
    return (
        <TextInput
            style={styles.txtInput}
            mode="outlined"
            secureTextEntry={passSecure}
            label="Outlined input"
            placeholder="Type something"
            right={isSecure && <TextInput.Icon
                onPress={() => {
                    setPassSecure(!passSecure)
                }}
                icon={passSecure ? Images.eye : Images.eyeDisable}
                iconColor={Colors.grayDropDown}
                size={20}
            />}
        />
    )
}

export default BaseTextInput

const styles = StyleSheet.create({
    txtInput: {

    }
})