import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import BaseSafeViewComp from '../../baseComponent/BaseSafeViewComp'
import TextBaseComp from '../../baseComponent/TextBaseComp'
import { T } from '../../constants/T'
import { useNavigation, StackActions } from '@react-navigation/native'
import BaseTextInput from '../../baseComponent/BaseTextInput'
import BaseButton from '../../baseComponent/BaseButton'
import PressableText from '../../baseComponent/PressableText'
import { NavScreenName } from '../../constants/NavigationScreens'
import { shareStyles } from '../../constants/SharedStyles'
import { usePopupContext } from '../../utils/popUp/PopupContext'
import AlertComp from '../../baseComponent/AlertComp'
import { ValidateData } from '../../constants/ValidationReg'


const SignUpScreen = () => {
  const navigation = useNavigation()
  const popUp = usePopupContext();
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [validate, setValidate] = useState(null)
  const createOnPress = () => {
    if (
      ValidateData(email, 'Email') ||
      ValidateData(password, 'Password') ||
      ValidateData(fullName, 'Full Name') ||
      ValidateData(mobileNumber, 'Mobile Number') ||
      ValidateData(password, 'Password') ||
      ValidateData(confPassword, 'Password')
    ) {
      setValidate(validate == null ? true : !validate)
      return
    }

    popUp.open(
      <AlertComp
        title={T.success_signup}
        btnTxt={T.ok}
        btnOnPress={() => {
          navigation.dispatch(StackActions.replace(NavScreenName.login))
          popUp.hide()
        }}

      />
    );
  }
  return (
    <BaseSafeViewComp>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" contentContainerStyle={shareStyles.scrollView}>
        <View style={shareStyles.subContainer}>
          <TextBaseComp style={shareStyles.titleTxt} children={T.create_account} />
          <TextBaseComp style={shareStyles.subDesTxt} children={T.fill_in_the_form} />
          <View style={shareStyles.txtInputContainer}>
            <BaseTextInput btnType={'Full Name'} validate={validate} onChangeText={setFullName} value={fullName} placeholder={T.full_name} />
            <BaseTextInput btnType={'Username'} validate={validate} onChangeText={setUserName} value={userName} placeholder={T.user_name} />
            <BaseTextInput btnType={'Mobile Number'} validate={validate} onChangeText={setMobileNumber} value={mobileNumber} placeholder={T.mobile_number} />
            <BaseTextInput btnType={'Email'} validate={validate} onChangeText={setEmail} value={email} placeholder={T.email} />
            <BaseTextInput btnType={'Password'} validate={validate} onChangeText={setPassword} value={password} placeholder={T.password} />
            <BaseTextInput btnType={'Password'} validate={validate} onChangeText={setConfPassword} value={confPassword} placeholder={T.conf_password} />
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
