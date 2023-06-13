import { ScrollView, View } from 'react-native'
import React from 'react'
import BaseSafeViewComp from '../../baseComponent/BaseSafeViewComp'
import TextBaseComp from '../../baseComponent/TextBaseComp'
import { T } from '../../constants/T'
import { useNavigation, StackActions } from '@react-navigation/native'
import BaseTextInput from '../../baseComponent/BaseTextInput'
import BaseButton from '../../baseComponent/BaseButton'
import PressableText from '../../baseComponent/PressableText'
import { NavScreenName } from '../../constants/NavigationScreens'
import { shareStyles } from '../../constants/SharedStyles'


const SignUpScreen = () => {
  const navigation = useNavigation()
  const createOnPress = () => {

  }
  return (
    <BaseSafeViewComp>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" contentContainerStyle={shareStyles.scrollView}>
        <View style={shareStyles.subContainer}>
          <TextBaseComp style={shareStyles.titleTxt} children={T.create_account} />
          <TextBaseComp style={shareStyles.subDesTxt} children={T.fill_in_the_form} />
          <View style={shareStyles.txtInputContainer}>
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
          <View style={shareStyles.footerContainer}>
            <TextBaseComp children={T.have_account} style={shareStyles.footerTxt} />
            <PressableText onPress={() => { navigation.dispatch(StackActions.replace(NavScreenName.login)) }} style={shareStyles.pressableTxt} children={T.login} />
          </View>
        </View>
      </ScrollView>
    </BaseSafeViewComp>
  )
}

export default SignUpScreen


