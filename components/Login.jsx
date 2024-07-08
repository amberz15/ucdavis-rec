import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function login() {
    const router = useRouter();
  return (
    <View>
      <Text>login</Text>
      <TouchableOpacity onPress={() => router.push('auth/sign-in')}>
        <Text>sign in</Text>
      </TouchableOpacity>
    </View>
  )
}