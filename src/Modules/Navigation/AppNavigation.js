import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';
import { OuterCategoriesScreen } from '../OuterCategories/Screens/OuterCategoriesScreen';
import PlayScreen from '../Play/Screens/PlayScreen';
import InnerCategoriesScreen from '../Play/Screens/InnerCategoriesScreen';

const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: 'Home Screen',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppStack.Screen
                name="outer-categories-screen"
                component={OuterCategoriesScreen}
                options={{
                    title: 'Outer Categories',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppStack.Screen
                name="inner-categories-screen"
                component={InnerCategoriesScreen}
                options={{
                    title:'Inner Categories',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppStack.Screen
                name="play-screen"
                component={PlayScreen}
                options={{
                    title:'Playing...',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
