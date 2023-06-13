import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View, Alert, ActivityIndicator } from 'react-native'
import BaseSafeViewComp from '../../../baseComponent/BaseSafeViewComp'
import BlogListCard from '../../component/listCards/BlogListCard'
import { getBlog } from '../../../api/API'
import { shareStyles } from '../../../constants/SharedStyles'
import { Colors } from '../../../constants/Colors'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { FlashList } from '@shopify/flash-list'

const HomeComponent = () => {
  const [blogData, setBlogData] = useState([])
  const bottomHeight = useBottomTabBarHeight()
  const [limit, setLimit] = useState(15)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getBlog(limit).then((data) => {
      const ourData = [...data["feed"]["entry"]]
      setBlogData(ourData)
    }).catch((error) => {
      setError(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [limit])
  return (
    <BaseSafeViewComp>
      <View style={[shareStyles.subContainer, {
        flex: 1,
        padding: 10,
        paddingTop: 20,
      }]}>
        <FlashList
          showsVerticalScrollIndicator={false}
          estimatedItemSize={100}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (loading == false && error == null) {
              setLimit(blogData.length + 10)
            }
          }}
          data={blogData}
          ItemSeparatorComponent={() => {
            return (
              <View style={{ height: 10 }} />
            )
          }}
          renderItem={({ item, index }) => {
            return (
              <BlogListCard index={index} uri={item["im:image"][1]["label"]} text={item["im:name"]["label"]} />
            )
          }}
        />
        {
          loading && <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 25,
            borderRadius: 20,
            columnGap: 10
          }}>
            <ActivityIndicator {
              ...{
                'size': 'small',
                'color': Colors.primary
              }
            } />
          </View>
        }
      </View>
    </BaseSafeViewComp>
  )
}

export default HomeComponent