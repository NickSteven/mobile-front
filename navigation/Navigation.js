import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

import Employe from '../components/Employe';
import Entreprise from '../components/Entreprise';
import Travail from '../components/Travail';

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const employeTab = createNativeStackNavigator();
const entreTab = createNativeStackNavigator();
const travTab = createNativeStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#9754cb'
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerShadowVisible: false

        }}>
            <Stack.Screen name="Root" component={MainTab}
            options={{
                title:'Gestion des employés',
                headerTintColor: '#fff'
            }}
            />
        </Stack.Navigator>
    )
}


function MainTab() {
    return(
            <TopTab.Navigator
                initialRouteName="Employe"
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        backgroundColor: '#9754cb'
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#fff',
                        height: 3
                    },
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 16
                    }
                }}
            >
                <TopTab.Screen name="Employés" 
                    component={Employe}
                />
                <TopTab.Screen name="Entreprises" 
                    component={Entreprise}
                />
                <TopTab.Screen name="Travaux" 
                    component={Travail}    
                />

            </TopTab.Navigator>
    )
}


