import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';
import { OuterCategoriesScreen } from '../OuterCategories/Screens/OuterCategoriesScreen';
import PlayScreen from '../Play/Screens/PlayScreen';
import InnerCategoriesScreen from '../InnerCategories/Screens/InnerCategoriesScreen';
import HelpScreen from '../Help/Screen/HelpScreen';
const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppStack.Screen
                name="help-screen"
                component={HelpScreen}
                options={{
                    title: 'Nasıl Oynanır',
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
                    title: '',
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
                    title:'',
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
                    title:'',
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
