import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../../constants/Images'
import TextBaseComp from '../../../baseComponent/TextBaseComp'
import { Fonts } from '../../../constants/Fonts'
import { Colors } from '../../../constants/Colors'

const ProfileCard = ({onPress, image, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image resizeMode='contain' style={{ height: 40, width: 40 }} source={image} />
            <TextBaseComp style={styles.txt} children={text} />
        </TouchableOpacity>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        
    },
    txt: {
        fontFamily: Fonts.regular,
        color: Colors.subText,
        fontSize: 16
    }
})