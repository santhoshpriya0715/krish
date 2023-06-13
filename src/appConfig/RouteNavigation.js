import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import NavStack from './NavStack';
import PopupRoot from '../utils/popUp/PopupRoot';
import { AuthUpdate } from '../redux/actions/AuthActions';

const RouteNavigation = () => {
    const authReducer = useSelector(state => state.authReducer)
    const dbReducer = useSelector(state => state.dbReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (dbReducer.signUpData && authReducer.authStep) {
            const data = dbReducer.signUpData.get(authReducer.username)
            dispatch(AuthUpdate({ ...data }))
        }
    }, [dbReducer])

    return (
        <PopupRoot>
            <NavigationContainer>
                <NavStack stackType={authReducer.authStep} />
            </NavigationContainer >
        </PopupRoot>
    )
}

export default RouteNavigation