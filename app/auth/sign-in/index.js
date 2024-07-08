import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function SignIn() {

    const router = useRouter();
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF9E7',
      }}>
      <TouchableOpacity onPress={()=>router.replace('home')}>
        <Text>sign in</Text>
      </TouchableOpacity>
    </View>
  )
}