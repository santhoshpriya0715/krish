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
import { useDispatch, useSelector } from 'react-redux'
import { SignUpUpdate } from '../../redux/actions/DBActions'


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
  const signedUsers = useSelector(state => state.dbReducer)
  const dispatch = useDispatch()

  const createOnPress = () => {
    const emailE = email.trim()
    const fullNameE = fullName.trim()
    const userNameE = userName.trim()
    const mobileNumberE = mobileNumber.trim()
    const passwordE = password.trim()
    const confPasswordE = confPassword.trim()
    if (
      ValidateData(emailE, 'Email') ||
      ValidateData(userNameE, 'Username') ||
      ValidateData(fullNameE, 'Full Name') ||
      ValidateData(mobileNumberE, 'Mobile Number') ||
      ValidateData(passwordE, 'Password') ||
      ValidateData(confPasswordE, 'Password')
    ) {
      setValidate(validate == null ? true : !validate)
      return
    }

    if (!(password == confPassword)) {
      popUp.open(
        <AlertComp
          title={T.confirm_password_not_match}
          btnTxt={T.ok}
          btnOnPress={() => {
            popUp.hide()
          }}

        />
      );
      return
    }
    if (signedUsers.signUpData && signedUsers.signUpData.findIndex((value, index) => { return value.username == userNameE }) != -1) {
      popUp.open(
        <AlertComp
          title={T.user_name_exist}
          btnTxt={T.ok}
          btnOnPress={() => {
            popUp.hide()
          }}

        />
      );
      return
    }
    dispatch(
      SignUpUpdate({
        name: fullNameE,
        email: emailE,
        phoneNumber: mobileNumberE,
        password: passwordE,
        username: userNameE
      }))
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
