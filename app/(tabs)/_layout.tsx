import Icon from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import React from 'react';

const LayoutForTabs = () => {
    console.log(Date.now(), 'LayoutForTabs');
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <Icon size={28} name='home' color={color} />,
                }}
            />
            <Tabs.Screen
                name='tab2/index'
                options={{
                    title: 'New Task',
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <Icon size={28} name='pluscircleo' color={color} />,
                }}
            />
            <Tabs.Screen
                name='tab3'
                options={{
                    title: 'Tab3',
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <Icon size={28} name='github' color={color} />,
                }}
            />
        </Tabs>
    );
};
export default LayoutForTabs;
