import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TextBaseComp = ({ children, ...props }) => {
    return (
        <Text  {...props}>
            {children}
        </Text>
    )
}

export default TextBaseComp

const styles = StyleSheet.create({})