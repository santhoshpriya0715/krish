import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseSafeViewComp from '../../baseComponent/BaseSafeViewComp'
import { Colors } from '../../constants/Colors'
import TextBaseComp from '../../baseComponent/TextBaseComp'
import { T } from '../../constants/T'
import { Fonts } from '../../constants/Fonts'
import { useNavigation, StackActions } from '@react-navigation/native'
import BaseTextInput from '../../baseComponent/BaseTextInput'
import BaseButton from '../../baseComponent/BaseButton'
import PressableText from '../../baseComponent/PressableText'
import { NavScreenName } from '../../constants/NavigationScreens'


const SignUpScreen = () => {
  const navigation = useNavigation()
  const createOnPress = () => {

  }
  return (
    <BaseSafeViewComp>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" contentContainerStyle={styles.scrollView}>
        <View style={styles.subContainer}>
          <TextBaseComp style={styles.titleTxt} children={T.create_account} />
          <TextBaseComp style={styles.subDesTxt} children={T.fill_in_the_form} />
          <View style={styles.txtInputContainer}>
            <BaseTextInput placeholder={T.full_name} />
            <BaseTextInput placeholder={T.user_name} />
            <BaseTextInput placeholder={T.mobile_number} />
            <BaseTextInput placeholder={T.email} />
            <BaseTextInput placeholder={T.password} />
            <BaseTextInput placeholder={T.conf_password} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <BaseButton title={T.create_account} onPress={createOnPress} />
          </View>
          <View style={styles.footerContainer}>
            <TextBaseComp children={T.have_account} style={styles.footerTxt} />
            <PressableText onPress={() => { navigation.dispatch(StackActions.replace(NavScreenName.login)) }} style={styles.pressableTxt} children={T.login} />
          </View>
        </View>
      </ScrollView>
    </BaseSafeViewComp>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
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
