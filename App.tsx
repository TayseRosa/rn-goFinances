import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar }from 'react-native';
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/theme';

//import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';

//Importação do Context
//import { AuthContext } from './src/AuthContext';
import { AuthProvider, useAuth } from './src/hooks/auth';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
}from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth();

  if(!fontsLoaded || userStorageLoading) {
    //Tela de Splash (a tela que aparece enquanto o app é carregado)
    return <AppLoading />
  }

  return(
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          {/* <SignIn /> */}
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  )
}