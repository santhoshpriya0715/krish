import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import TextBaseComp from '../../../baseComponent/TextBaseComp'
import { Fonts } from '../../../constants/Fonts'

const BlogListCard = ({ uri, text, index }) => {
    return (
        <View key={index} style={styles.container}>
            <TextBaseComp style={styles.txt} children={text} />
            <Image style={styles.img} source={{ uri: uri }} />
        </View>
    )
}

export default React.memo(BlogListCard)

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
        borderRadius: 20,
        columnGap: 10
    },
    txt: {
        flex: 1,
        fontSize: 18,
        fontFamily: Fonts.regular,
        color: Colors.white
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 15

    }
})