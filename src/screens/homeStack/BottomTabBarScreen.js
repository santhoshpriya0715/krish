import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import BottomTabbarItem from './component/BottomTabbarItem';
import HomeComponent from './component/HomeComponent';
import ProfileComponent from './component/ProfileComponent';



function MyTabBar({ state, descriptors, navigation }) {



  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <BottomTabbarItem key={index} index={index} onPress={onPress} label={label} routeLength={state.routes.length} isFocused={isFocused} />
        );
      })}

    </View>
  );
}

const Tab = createBottomTabNavigator();
const BottomTabBarScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Blog" component={HomeComponent} />
      <Tab.Screen name="Profile" component={ProfileComponent} />
    </Tab.Navigator>
  );
}

export default BottomTabBarScreen
