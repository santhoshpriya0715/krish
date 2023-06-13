import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../../constants/Images'
import TextBaseComp from '../../../baseComponent/TextBaseComp'
import { Fonts } from '../../../constants/Fonts'
import { Colors } from '../../../constants/Colors'

const ProfileCard = ({ onPress, ourImage, text }) => {
    var image = null

    switch (ourImage) {
        case 'name':
            image = Images.user
            break;
        case 'email':
            image = Images.mail
            break
        case 'phoneNumber':
            image = Images.mobileBook
            break;
        case 'password':
            image = Images.password
            break;
        case 'logout':
            image = Images.logout
        default:
            break;
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image resizeMode='contain' style={{ height: 35, width: 35, tintColor: Colors.primary }} source={image} />
            <TextBaseComp style={styles.txt} children={ourImage == 'password' ? '********' : text} />
            {
                ourImage == 'password' &&
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image resizeMode='contain' style={{ height: 20, width: 20, tintColor: Colors.primary }} source={Images.next} />
                </View>

            }

        </TouchableOpacity>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        paddingTop: 15,
        paddingBottom: 15
    },
    txt: {
        fontFamily: Fonts.regular,
        color: Colors.subText,
        fontSize: 16
    }
})