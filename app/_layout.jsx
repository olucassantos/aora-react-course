import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Previne que a tela de splash seja ocultada automaticamente antes que o carregamento dos ativos seja concluído.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });

    // o useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais
    // o useEffect é executado após a renderização do componente
    // o useEffect é executado após a renderização do componente e após cada atualização do componente
    useEffect(() => {
        if (error) throw error; // se houver um erro, ele é lançado
        if (fontsLoaded) SplashScreen.hideAsync(); // se as fontes estiverem carregadas, a tela de splash é escondida
    }, [fontsLoaded, error]);

    // se as fontes não estiverem carregadas e não houver erro, retorna null
    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    )
}

export default RootLayout