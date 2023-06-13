import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseSafeViewComp from '../../baseComponent/BaseSafeViewComp'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../constants/Images'
import { Colors } from '../../constants/Colors'
import { shareStyles } from '../../constants/SharedStyles'
import BaseTextInput from '../../baseComponent/BaseTextInput'
import TextBaseComp from '../../baseComponent/TextBaseComp'
import { T } from '../../constants/T'
import { Fonts } from '../../constants/Fonts'
import BaseButton from '../../baseComponent/BaseButton'
import { ValidateData } from '../../constants/ValidationReg'
import { useSelector } from 'react-redux'
import { usePopupContext } from '../../utils/popUp/PopupContext'
import AlertComp from '../../baseComponent/AlertComp'

const ChangePasswordScreen = () => {
  const navigation = useNavigation()
  const [oldPassword, setOldPassword] = useState()
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [validate, setValidate] = useState(null)
  const authReducer = useSelector(state => state.authReducer)
  const popUp = usePopupContext();
  useEffect(() => {
    navigation.setOptions(
      {
        headerShown: true,
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.canGoBack() && navigation.goBack()
            }}>
              <Image style={{ height: 30, width: 30, tintColor: Colors.primary }} source={Images.back} />
            </TouchableOpacity>
          )
        }
      }
    )
  }, [])
  const onChangePassword = () => {
    const passwordE = password.trim()
    const confPasswordE = confPassword.trim()
    if (
      ValidateData(passwordE, 'Password') ||
      ValidateData(confPasswordE, 'Password')
    ) {
      setValidate(validate == null ? true : !validate)
      return
    }

    if (authReducer.password != confPasswordE) {
      popUp.open(
        <AlertComp
          title={T.enter_correct_password}
          btnTxt={T.ok}
          btnOnPress={() => {
            popUp.hide()
          }}

        />
      );
      return
    }


  }
  return (
    <BaseSafeViewComp>
      <View style={[shareStyles.subContainer, { flex: 1, paddingTop: 30 }]}>
        <TextBaseComp style={styles.titleTxt} children={T.change_password} />
        <View style={shareStyles.txtInputContainer}>
          <BaseTextInput onChangeText={setOldPassword} value={oldPassword} placeholder={T.password} />
          <BaseTextInput btnType={'Password'} validate={validate} onChangeText={setPassword} value={password} placeholder={T.password} />
          <BaseTextInput btnType={'Password'} validate={validate} onChangeText={setConfPassword} value={confPassword} placeholder={T.conf_password} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <BaseButton title={T.update} onPress={onChangePassword} />
        </View>
      </View>
    </BaseSafeViewComp>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
  titleTxt: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontSize: 24
  }
})