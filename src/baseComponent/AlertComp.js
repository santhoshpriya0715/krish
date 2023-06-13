import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextBaseComp from './TextBaseComp'
import PressableText from './PressableText'
import { Fonts } from '../constants/Fonts'
import { Colors } from '../constants/Colors'
import { shareStyles } from '../constants/SharedStyles'

const AlertComp = ({ title, btnTxt, btnOnPress }) => {
    return (
        <View >
            <TextBaseComp style={styles.titleText} children={title} />
            <View style={styles.pressTxtContainer}>
                <PressableText style={[shareStyles.pressableTxt, {fontSize: 20}]} onPress={btnOnPress} children={btnTxt} />
            </View>
        </View>
    )
}

export default AlertComp

const styles = StyleSheet.create({
    titleText: {
        fontFamily: Fonts.regular,
        fontSize: 18,
        color: Colors.subText,
        textAlign: 'center'
    },
    pressTxtContainer: {
        marginTop: 20, 
        paddingEnd: 20,
        alignItems: 'flex-end'
    }
})