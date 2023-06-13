import { StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';

const BaseSafeViewComp = ({ children, statusBar }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} animated={true} {...statusBar} />
            {
                children
            }
        </SafeAreaView>
    )
}

export default BaseSafeViewComp

const styles = StyleSheet.create({})