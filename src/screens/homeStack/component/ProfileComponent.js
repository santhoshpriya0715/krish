import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseSafeViewComp from '../../../baseComponent/BaseSafeViewComp'
import TextBaseComp from '../../../baseComponent/TextBaseComp'
import { T } from '../../../constants/T'
import { Colors } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'
import ProfileCard from '../../component/listCards/ProfileCard'
import { useSelector } from 'react-redux'

const ProfileComponent = () => {
  const authReducer = useSelector(state => state.authReducer)
  const [profileData, setProfileData] = useState([])
  console.log(profileData)
  useEffect(() => {
    const data = authReducer
    delete data.authStep
    delete data.username
    const tem2 = Object.entries(data)
    tem2.push(['logout', ''])
    setProfileData(tem2)
  }, [authReducer])
  return (
    <BaseSafeViewComp>
      <View style={styles.mainContainer}>
        <View style={styles.headerComponent}>
          <TextBaseComp style={styles.titleTxt} children={T.user_name} />
          <TextBaseComp style={styles.desTxt} children={'santhosh'} />
        </View>
        <View style={{ height: 1, backgroundColor: Colors.trans, marginTop: 20, marginBottom: 20 }} />
        <FlatList
          data={[1]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
          renderItem={() => {
            return (
              <ProfileCard />
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