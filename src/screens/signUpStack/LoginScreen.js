import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AlertComp from '../../baseComponent/AlertComp'
import BaseButton from '../../baseComponent/BaseButton'
import BaseSafeViewComp from '../../baseComponent/BaseSafeViewComp'
import BaseTextInput from '../../baseComponent/BaseTextInput'
import PressableText from '../../baseComponent/PressableText'
import TextBaseComp from '../../baseComponent/TextBaseComp'
import { NavScreenName } from '../../constants/NavigationScreens'
import { shareStyles } from '../../constants/SharedStyles'
import { T } from '../../constants/T'
import { ValidateData } from '../../constants/ValidationReg'
import { AuthUpdate } from '../../redux/actions/AuthActions'
import { usePopupContext } from '../../utils/popUp/PopupContext'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [validate, setValidate] = useState(null)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const signedUsers = useSelector(state => state.dbReducer)
  const popUp = usePopupContext();
  const dispatch = useDispatch()
  const onPressLogin = () => {
    const userNameE = userName.trim()
    const passwordE = password.trim()
    if (
      ValidateData(userNameE, 'Username') ||
      ValidateData(passwordE, 'Password')
    ) {
      setValidate(validate == null ? true : !validate)
      return
    }
    const id = signedUsers.signUpData.findIndex((value, index) => { return value.username == userNameE })
    if (signedUsers.signUpData) {
      if (id == -1) {
        popUp.open(
          <AlertComp
            title={T.user_name_not_exist}
            btnTxt={T.ok}
            btnOnPress={() => {
              popUp.hide()
            }}
          />
        );
        return
      }
    }

    const signInData = signedUsers.signUpData[id]

    if (!(signInData.password == passwordE)) {
      popUp.open(
        <AlertComp
          title={T.user_name_password_wrong}
          btnTxt={T.ok}
          btnOnPress={() => {
            popUp.hide()
          }}
        />
      );
      return
    }

    dispatch(AuthUpdate({
      authStep: 1,
      ...signInData
    }))

  }

  return (
    <BaseSafeViewComp>
      <ScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={shareStyles.scrollView}>
        <View style={shareStyles.subContainer}>
          <TextBaseComp style={shareStyles.titleTxt} children={T.welcome_back} />
          <TextBaseComp style={shareStyles.subDesTxt} children={T.login_to_continue} />
          <View style={shareStyles.txtInputContainer}>

            <BaseTextInput btnType={'Username'} validate={validate} onChangeText={setUserName} value={userName} placeholder={T.user_name} />
            <BaseTextInput btnType={'Password'} validate={validate} onChangeText={setPassword} value={password} placeholder={T.password} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <BaseButton title={T.login} onPress={onPressLogin} />
          </View>
          <View style={shareStyles.footerContainer}>
            <TextBaseComp children={T.do_not_have_account} style={shareStyles.footerTxt} />
            <PressableText onPress={() => { navigation.dispatch(StackActions.replace(NavScreenName.signUp)) }} style={shareStyles.pressableTxt} children={T.create_account} />
          </View>
        </View>
      </ScrollView>
    </BaseSafeViewComp>
  )
}

export default LoginScreen