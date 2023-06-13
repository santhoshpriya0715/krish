import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { Fonts } from '../constants/Fonts'


const BaseButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default BaseButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 15,
        paddingStart: 20,
        paddingEnd: 20,
        borderRadius: 20
    },
    txt: {
        color: Colors.white,
        fontFamily: Fonts.bold,
        fontSize: 18
    }
})