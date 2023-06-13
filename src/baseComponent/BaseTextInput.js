import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, HelperText } from 'react-native-paper'
import { Images } from '../constants/Images'
import { Colors } from '../constants/Colors'
import { Fonts } from '../constants/Fonts'
import { ValidateData } from '../constants/ValidationReg'



const BaseTextInput = ({ btnType, value, validate, onChangeText, isSecure = false, placeholder, ...props }) => {
    const [passSecure, setPassSecure] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        if (validate != null) {
            const err = ValidateData(value, btnType)
            if (err) {
                setError(err)
            }
        }
    }, [validate])

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
                onChangeText={(text) => {
                    error && setError('')
                    onChangeText(text)
                }}
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
                returnKeyType='done'
                returnKeyLabel='Done'
                {
                ...props
                }
            />
            <HelperText
                style={{
                    margin: 0,
                    padding: 0,
                    // height: 20,
                    paddingVertical: 0,
                    fontSize: 12,
                    fontFamily: Fonts.regular,
                }}
                visible={error.length > 0}
                children={error.toString()}
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