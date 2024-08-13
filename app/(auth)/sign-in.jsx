import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmiting, setIsSubmiting] = useState(false)

    const submit = () => { };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[88vh] px-4 my-6">
                    <Image 
                        source={images.logo} 
                        resizeMode='contain'
                        className="w-[115px] h-[35px]"
                    />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                        Entrar em Aora
                    </Text>

                    <FormField 
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField 
                        title="Senha"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton 
                        title="Entrar"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmiting}
                    />
                    
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Não tem uma conta?
                        </Text>

                        <Link 
                            href="/sign-up"
                            className="text-lg font-psemibold text-secondary"
                        >
                            Registre-se
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn