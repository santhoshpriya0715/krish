import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextBaseComp = ({ type, children, ...props }) => {
    return (
        <Text  {...props}>
            {children}
        </Text>
    )
}

export default TextBaseComp

const styles = StyleSheet.create({})