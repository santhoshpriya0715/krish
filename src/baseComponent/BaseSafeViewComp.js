import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';

const BaseSafeViewComp = ({ children, statusBar }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} animated={true} {...statusBar} />
            {
                children
            }
        </SafeAreaView>
    )
}

export default BaseSafeViewComp

const styles = StyleSheet.create({})