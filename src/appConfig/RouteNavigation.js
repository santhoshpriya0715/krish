import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import NavStack from './NavStack';

const RouteNavigation = () => {
    const authReducer = useSelector(state=> state.authReducer)
    return (
        <NavigationContainer>
            <NavStack stackType={authReducer.authStep} />
        </NavigationContainer >
    )
}

export default RouteNavigation