/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer, createDrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailScreen from './detail';
import ListScreen from './list';
import AddScreen from './add';

const listStack = createStackNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: {
            title: 'Locations'
        }
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#4C3E54'},
        headerTintColor: 'white',
        headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingLeft: 20}}>
                        <Icon name={'ios-menu'} size={30} color={'white'}/>
                    </TouchableOpacity>
    })
});

const detailStack = createStackNavigator({
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'Location Details'
        }
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#4C3E54'},
        headerTintColor: 'white',
        headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingLeft: 20}}>
                        <Icon name={'ios-menu'} size={30} color={'white'}/>
                    </TouchableOpacity>
    })
});

const addStack = createStackNavigator({
    Add: {
        screen: AddScreen,
        navigationOptions: {
            title: 'Add Location'
        }
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#4C3E54'},
        headerTintColor: 'white',
        headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingLeft: 20}}>
                        <Icon name={'ios-menu'} size={30} color={'white'}/>
                    </TouchableOpacity>
    })
});

const drawerStack = createDrawerNavigator({
    listStack: {
        screen: listStack,
        navigationOptions: {
            drawerLabel: 'Locations'
        }
    },
    detailStack: {
        screen: detailStack,
        navigationOptions: {
            drawerLabel: 'Location Details'
        }
    },
    addStack: {
        screen: addStack,
        navigationOptions: {
            drawerLabel: 'Add Location'
        }
    }
});

export const AppNavigator = createAppContainer(
    createStackNavigator({
        Drawer: {
            screen: drawerStack
        }
    }, {
        headerMode: 'none'
    })
)


// export const AppNavigator = createAppContainer(
//         createStackNavigator({
//             screen: createDrawerNavigator({
//                 List: ListScreen,
//                 Detail: {
//                     screen: DetailScreen,
//                     navigationOptions: {
//                         title: 'Location Details',
//                         drawerLabel: 'Location Details'
//                     }
//                 },
//                 Add: {
//                     screen: AddScreen,
//                     title: 'Add Location'
//                 }
//             })
        // }, {
        //     defaultNavigationOptions: ({navigation}) => ({
        //         headerStyle: {backgroundColor: '#4C3E54'},
        //         headerTintColor: 'white',
        //         headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingLeft: 20}}>
        //                         <Icon name={'ios-menu'} size={30} color={'white'}/>
        //                     </TouchableOpacity>,
        //         title: navigation.state.routeName
        //     })
        // })
// );
