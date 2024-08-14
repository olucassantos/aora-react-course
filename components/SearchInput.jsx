import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className="border-2 border-black-200 rounded-2xl focus:border-secondary 
            w-full h-16 px-4 bg-black-100 items-center flex-row space-x-4">
            <TextInput
                className="text-base mt-0.5 text-white font-pregular flex-1"
                value={value}
                placeholder="Procure por um topico de video"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
            />

            <TouchableOpacity onPress={() => {}}>
                <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput