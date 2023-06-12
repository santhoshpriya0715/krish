import {
    createStackNavigator
} from '@react-navigation/stack';
import { NavScreenName } from '../constants/NavigationScreens';
import BottomTabBarScreen from '../screens/homeStack/BottomTabBarScreen';
import LoginScreen from '../screens/signUpStack/LoginScreen';
import SignUpScreen from '../screens/signUpStack/SignUpScreen';


const Stack = createStackNavigator();
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
        </Stack.Navigator>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator {...stackProps}>
            <Stack.Screen
                name={NavScreenName.login}
                component={LoginScreen}
            />
            <Stack.Screen
                name={NavScreenName.signUp}
                component={SignUpScreen}
            />
        </Stack.Navigator>
    )
}


const NavStack = ({stackType}) => {
    switch (stackType) {
        case 0:
            return AuthStack
        case 1:
            return HomeStack
    }
}

export default NavStack