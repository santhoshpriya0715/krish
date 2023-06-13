import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, HelperText } from 'react-native-paper'
import { Images } from '../constants/Images'
import { Colors } from '../constants/Colors'
import { Fonts } from '../constants/Fonts'



const BaseTextInput = ({ value, onChangeText, isSecure = false, error, placeholder, ...props }) => {
    const [passSecure, setPassSecure] = useState(true)
    return (
        <View>
            <TextInput
                outlineStyle={{
                    borderRadius: 10
                }}
                contentStyle={{
                    color: Colors.subText
                }}
                outlineColor={Colors.grayDropDown}
                activeOutlineColor={Colors.primary}
                style={styles.txtInput}
                mode="outlined"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isSecure == false ? false : passSecure}
                label={placeholder}
                placeholder={placeholder}
                right={
                    isSecure && <TextInput.Icon
                        onPress={() => {
                            setPassSecure(!passSecure)
                        }}
                        icon={passSecure ? Images.eye : Images.eyeDisable}
                        iconColor={Colors.grayDropDown}
                        size={20}
                    />
                }
                {
                ...props
                }
            />
            <HelperText
                style={{
                    margin: 0,
                    padding: 0,
                    height: 20,
                    paddingVertical: 0,
                    fontSize: 12,
                    fontFamily: Fonts.regular,
                }}
                visible={error && error.length > 0}
                children={error}
                type={'error'}
            />
        </View>
    )
}

export default BaseTextInput

const styles = StyleSheet.create({
    txtInput: {

    }
})