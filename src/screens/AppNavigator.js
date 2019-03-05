/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text} from 'react-native';
import {createAppContainer, createDrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';
import DetailScreen from './detail';
import ListScreen from './list';
import AddScreen from './add';


export const AppNavigator = createAppContainer(
        createStackNavigator({
            screen: createDrawerNavigator({
                List: {
                    screen: ListScreen
                },
                Detail: {
                    screen: DetailScreen
                },
                Add: {
                    screen: AddScreen
                }
            })
        }, {
            headerMode: 'float',
            defaultNavigationOptions: ({navigation}) => ({
                headerStyle: {backgroundColor: '#4C3E54'},
                headerTintColor: 'white',
                title: 'Welcome!',
                headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Menu</Text>
            })
        })
);
