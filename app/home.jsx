import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function home() {
  return (
    <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFF9E7',
    }}>
      <Text style={{
        fontSize: 30,
        fontFamily: 'proxima-nova',
      }}>home</Text>
      <Text style={{
        fontSize: 30,
        fontFamily: 'proxima-nova',
      }}
      >Upcoming Events</Text>
      <Card
      date="Wed, Nov. 24, 2024 | 8:00pm - 10:00pm"
      location="ARC Ballroom B"
      title="Salsa Night!"
      organization="Hosted by UC Davis Dance Club"
      attendance="Attending!"
      />
    </View>
  )
}