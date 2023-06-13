import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavScreenName } from '../constants/NavigationScreens';
import BottomTabBarScreen from '../screens/homeStack/BottomTabBarScreen';
import ChangePasswordScreen from '../screens/homeStack/ChangePasswordScreen';
import LoginScreen from '../screens/signUpStack/LoginScreen';
import SignUpScreen from '../screens/signUpStack/SignUpScreen';


const Stack = createNativeStackNavigator();
const stackProps = {
    screenOptions: {
        headerShown: false,
    },
};


const HomeStack = () => {
    return (
        <Stack.Navigator {...stackProps}>
            <Stack.Screen
                name={NavScreenName.home}
                component={BottomTabBarScreen}
            />
            <Stack.Screen
                name={NavScreenName.changePassword}
                component={ChangePasswordScreen}
                options={{
                    animation: 'slide_from_right'
                }}
            />
        </Stack.Navigator>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={NavScreenName.signUp} {...stackProps}>
            <Stack.Screen
                name={NavScreenName.login}
                component={LoginScreen}
                options={{
                    animation: 'slide_from_right'
                }}
            />
            <Stack.Screen
                name={NavScreenName.signUp}
                component={SignUpScreen}
                options={{
                    animation: 'slide_from_left'
                }}
            />
        </Stack.Navigator>
    )
}


const NavStack = ({ stackType }) => {
    switch (stackType) {
        case 0:
            return <AuthStack />
        case 1:
            return <HomeStack />
    }
}

export default NavStack