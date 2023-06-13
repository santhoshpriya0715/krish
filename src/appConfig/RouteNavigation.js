import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import NavStack from './NavStack';
import PopupRoot from '../utils/popUp/PopupRoot';

const RouteNavigation = () => {
    const authReducer = useSelector(state => state.authReducer)
    return (
        <PopupRoot>
            <NavigationContainer>
                <NavStack stackType={authReducer.authStep} />
            </NavigationContainer >
        </PopupRoot>
    )
}

export default RouteNavigation