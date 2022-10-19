import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon  from '@expo/vector-icons/AntDesign';

import Cadastro from "../pages/CadastroPage";
import Login from "../pages/LoginPage";
import PagPrincipal from "../pages/PagPrincipal";
import Clinica from "../pages/ClinicaPage";
import Especialidade from "../pages/EspecialidadePage"
import Contato from "../pages/ContatoPage"

const Drawer = createDrawerNavigator()

function Gaveta() {
    return (
        < Drawer.Navigator>   
        <Stack.Screen name="Principal" component={PagPrincipal} />
        <Drawer.Screen name="Clinica" component={Clinica} />
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function Menu() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Especial" component={Especialidade} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"closecircle"} color={"red"} size={size} />)
                }} />
            <Tab.Screen name="Contato" component={Contato} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"pluscircle"} color={"red"} size={size} />)
                }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="PagPrincipal" component={Gaveta} />
            <Tab.Screen name="Especialidade" component={Menu} />
            
        </Stack.Navigator>
    )
}