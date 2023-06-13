import { AppRegistry, StatusBar } from 'react-native';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxStore, persistor } from './src/redux/Store';
import RouteNavigation from './src/appConfig/RouteNavigation';
import { Provider } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const AppContainer = () => {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} animated={true} />
            <StoreProvider store={ReduxStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <Provider>
                        <RouteNavigation />
                    </Provider>
                </PersistGate>
            </StoreProvider>
        </SafeAreaProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
