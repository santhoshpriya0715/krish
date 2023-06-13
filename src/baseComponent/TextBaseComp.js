import { StyleSheet, Text } from 'react-native'
import React from 'react'

const TextBaseComp = ({ children, ...props }) => {
    return (
        <Text  {...props}>
            {children}
        </Text>
    )
}

export default TextBaseComp

const styles = StyleSheet.create({})