import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';
import { OuterCategoriesScreen } from '../Play/Screens/OuterCategoriesScreen';
import CategoriesScreen from '../Play/Screens/CategoriesScreen';


const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: 'Anasayfa',
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
                    title: 'Categories',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppStack.Screen
                name="categories-screen"
                component={CategoriesScreen}
                options={{
                    title:'Categories...',
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
