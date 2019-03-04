/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View} from 'react-native';
import {createAppContainer, createDrawerNavigator, DrawerItems} from 'react-navigation';
import DetailScreen from './detail';
import ListScreen from './list';
import AddScreen from './add';


export const AppNavigator = createAppContainer(
    createDrawerNavigator({
        List: {
            screen: ListScreen
        },
        Detail: {
            screen: DetailScreen
        },
        Add: {
            screen: AddScreen
        }
        }, {
            contentComponent: (props) => (
                <View style={{padding: 20}}>
                    <Image source={require('../assets/images/logo.png')}/>
                    <DrawerItems {...props}/>
                </View>
            )
        }
    )
);
