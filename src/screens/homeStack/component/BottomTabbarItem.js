import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import { Colors } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'
import React, { useRef, useEffect } from 'react'

const BottomTabbarItem = ({ index, onPress, label, routeLength, isFocused }) => {
    const animationRef = useRef(new Animated.Value(0)).current
    const scaleAni = animationRef.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [0, 1],
            'extrapolate': 'clamp'
        }
    )

    useEffect(() => {
        if (isFocused) {
            Animated.timing(animationRef, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.in)
            }).start()
        } else {
            Animated.timing(animationRef, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.in)
            }).start()
        }
    }, [isFocused])
    return (
        <View
            style={{
                flex: 1,
                height: 60,
                backgroundColor: Colors.primary,
                overflow: 'hidden',
                borderTopStartRadius: index == 0 ? 20 : 0,
                borderTopEndRadius: routeLength - 1 == index ? 20 : 0
            }}>
            <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={onPress}
            >
                <Text style={{ color: Colors.white, fontFamily: Fonts.medium, fontSize: 16 }}>
                    {label}
                </Text>
                <Animated.View style={{ width: 70, height: 2, borderRadius: 10, backgroundColor: Colors.white, transform: [{ scale: scaleAni }] }} />

            </TouchableOpacity>
        </View>
    )
}

export default BottomTabbarItem

const styles = StyleSheet.create({})