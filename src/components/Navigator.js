import React, { PureComponent } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home.js'
import Bookmark from '../screens/Bookmark.js'
import Categories from '../screens/Categories.js'
import Setting from '../screens/Setting.js'
import SinglePost from '../screens/SinglePost.js'
const Stack = createStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SinglePost" component={SinglePost} />
        </Stack.Navigator>
    );
}
export default function Navigator() {
   
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer >
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="Bookmark" component={Bookmark} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}