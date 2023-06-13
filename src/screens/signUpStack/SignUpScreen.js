import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseSafeViewComp from '../../baseComponent/BaseSafeViewComp'
import { Colors } from '../../constants/Colors'
import TextBaseComp from '../../baseComponent/TextBaseComp'
import { T } from '../../constants/T'
import { Fonts } from '../../constants/Fonts'
import { StackActions, useNavigation } from '@react-navigation/native'
import { NavScreenName } from '../../constants/NavigationScreens'
import BaseTextInput from '../../baseComponent/BaseTextInput'


const SignUpScreen = () => {
  const navigation = useNavigation()
  return (
    <BaseSafeViewComp>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.subContainer}>
          <TextBaseComp style={styles.titleTxt} children={T.create_account} />
          <TextBaseComp style={styles.subDesTxt} children={T.fill_in_the_form} />
          <BaseTextInput />
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
  }
})