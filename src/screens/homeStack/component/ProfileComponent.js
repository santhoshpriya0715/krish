import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseSafeViewComp from '../../../baseComponent/BaseSafeViewComp'
import TextBaseComp from '../../../baseComponent/TextBaseComp'
import { T } from '../../../constants/T'
import { Colors } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'
import ProfileCard from '../../component/listCards/ProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogout } from '../../../redux/actions/AuthActions'
import { usePopupContext } from '../../../utils/popUp/PopupContext'
import AlertComp from '../../../baseComponent/AlertComp'

const ProfileComponent = () => {
  const authReducer = useSelector(state => state.authReducer)
  const [profileData, setProfileData] = useState([])
  const dispatch = useDispatch()
  const popUp = usePopupContext();
  useEffect(() => {
    const data = authReducer
    delete data.authStep
    delete data.username
    const tem2 = Object.entries(data)
    tem2.push(['logout', 'Logout'])
    setProfileData(tem2)
  }, [authReducer])
  const itemPress = (ourImage) => {
    switch (ourImage) {
      case 'password':
        break;
      case 'logout':
        popUp.open(
          <AlertComp
            title={T.logout_message}
            btnTxt={T.ok}
            btnOnPress={() => {
              dispatch(AuthLogout())
              popUp.hide()
            }}
            noTxt={T.cancel}
            btnNoPress={() => {
              popUp.hide()
            }}
          />
        );

        break;
    }
  }
  return (
    <BaseSafeViewComp>
      <View style={styles.mainContainer}>
        <View style={styles.headerComponent}>
          <TextBaseComp style={styles.titleTxt} children={T.user_name} />
          <TextBaseComp style={styles.desTxt} children={'santhosh'} />
        </View>
        <View style={{ height: 1, backgroundColor: Colors.trans, marginTop: 20, marginBottom: 20 }} />
        <FlatList
          data={profileData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
          renderItem={({ item, index }) => {
            console.log(item)
            return (
              <ProfileCard onPress={() => { itemPress(item[0]) }} key={index} ourImage={item[0]} text={item[1]} />
            )
          }}
        />
        <View style={styles.footerComponent}>

        </View>
      </View>
    </BaseSafeViewComp>
  )
}

export default ProfileComponent

const styles = StyleSheet.create({
  headerComponent: {
    marginTop: 30,
  },
  footerComponent: {

  },
  titleTxt: {
    color: Colors.subText,
    fontFamily: Fonts.medium,
    fontSize: 16
  },
  desTxt: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: 18
  },
  mainContainer: {
    flex: 1,
    paddingStart: 40,
    paddingEnd: 40
  },
  flatList: {
    flex: 1,
    marginTop: 30,
  }

})