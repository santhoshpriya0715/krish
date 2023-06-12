import { AppRegistry, StatusBar } from 'react-native';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const AppContainer = () => {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} animated={true} />
            <StoreProvider store={ReduxStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouteNavigation />
                </PersistGate>
            </StoreProvider>
        </SafeAreaProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
