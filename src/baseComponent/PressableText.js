import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const PressableText = ({ children, onPress, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text {...props}>{children}</Text>
        </TouchableOpacity>
    )
}

export default PressableText
