import { StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const BaseSafeViewComp = ({ children , statusBar: {}}) => {
    return (
        <SafeAreaView>
            <StatusBar />
        </SafeAreaView>
    )
}

export default BaseSafeViewComp

const styles = StyleSheet.create({})