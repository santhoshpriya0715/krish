import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseSafeViewComp from '../../../baseComponent/BaseSafeViewComp'
import TextBaseComp from '../../../baseComponent/TextBaseComp'
import { T } from '../../../constants/T'
import { Colors } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'

const ProfileComponent = () => {
  return (
    <BaseSafeViewComp>
      <View style={styles.mainContainer}>
        <View style={styles.headerComponent}>
          <TextBaseComp style={styles.titleTxt} children={T.user_name} />
          <TextBaseComp style={styles.desTxt} children={'santhosh'} />
        </View>
        <View style={styles.footerComponent}>

        </View>
      </View>
    </BaseSafeViewComp>
  )
}

export default ProfileComponent

const styles = StyleSheet.create({
  headerComponent: {
    flex: 1,
    marginTop: 30
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
  }

})