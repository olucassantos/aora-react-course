import { StatusBar } from 'expo-status-bar';
import { router, Redirect } from 'expo-router';
import { Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

import { images } from '../constants';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
    const { isLoading, isLoggedIn } = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Image 
                        source={images.logo}
                        resizeMode='contain'
                        className="w-[130px] h-[84px]"
                    />

                    <Image 
                        source={images.cards}
                        className="max-w-[330px] h-[300px] w-full"
                        resizeMode='contain'
                    />

                    <View className="relative mt-5">
                        <Text className="text-4xl text-white font-bold text-center">
                            Descubra possibilidades infinitas com {' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        
                        <Image 
                            source={images.path}
                            className="absolute w-[136px] h-[15px] -bottom-2 -right-0"
                            resizeMode='contain'
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Onde a criatividade encontra inovação: embarque em uma jornada infinitas explorações com a Aora.
                    </Text>

                    <CustomButton 
                        title="Continuar com e-mail"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}