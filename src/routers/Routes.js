import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Cadastro from "../pages/CadastroPage";
import Login from "../pages/LoginPage";
import PagPrincipal from "../pages/PagPrincipal";
import Clinica from "../pages/ClinicaPage"

const Stack = createNativeStackNavigator
()

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Clinica">
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="PagPrincipal" component={PagPrincipal} />
            <Stack.Screen name="Clinica" component={Clinica} />
        </Stack.Navigator>
    )
}