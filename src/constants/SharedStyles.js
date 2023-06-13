import { StyleSheet } from 'react-native'
import { Colors } from './Colors'
import { Fonts } from './Fonts'
export const shareStyles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        backgroundColor: Colors.white
    },
    subContainer: {
        paddingStart: 40,
        paddingEnd: 40
    },
    titleTxt: {
        paddingTop: 50,
        color: Colors.primary,
        fontSize: 22,
        fontFamily: Fonts.bold
    },
    subDesTxt: {
        marginTop: 12,
        color: Colors.subText,
        fontSize: 14,
        fontFamily: Fonts.regular
    },
    txtInputContainer: {
        marginTop: 40,
        rowGap: 2,
    },
    footerContainer: {
        flex: 1,
        marginTop: 24,
        alignItems: 'center'
    },
    footerTxt: {
        color: Colors.subText,
        fontSize: 14,
        fontFamily: Fonts.bold
    },
    pressableTxt: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: Colors.primary
    }
})