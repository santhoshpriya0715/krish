import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { Fonts } from '../constants/Fonts'
import { shareStyles } from '../constants/SharedStyles'
import PressableText from './PressableText'
import TextBaseComp from './TextBaseComp'

const AlertComp = ({ title, btnTxt, btnOnPress, btnNoPress = null, noTxt }) => {
    return (
        <View >
            <TextBaseComp style={styles.titleText} children={title} />
            <View style={styles.pressTxtContainer}>
                {
                    btnNoPress && <PressableText style={[shareStyles.pressableTxt, { fontSize: 20 }]} onPress={btnNoPress} children={noTxt} />
                }

                <PressableText style={[shareStyles.pressableTxt, { fontSize: 20 }]} onPress={btnOnPress} children={btnTxt} />
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
        justifyContent: 'flex-end',
        columnGap: 40,
        flexDirection: 'row'
    }
})