import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ date, location, title, organization, attendance }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.organization}>{organization}</Text>
        <TouchableOpacity style={styles.attendance}>
            <Text style={styles.text}>{ attendance }</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: 229,
        height: 159,
        left: 20,
        top: 575,

        backgroundColor: '#FFFFFF',
        borderRadius: 15,
    },
    date:{
        fontFamily: 'proxima-nova',
        fontSize: 11,
        color: '#595959',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    location:{
        fontFamily: 'proxima-nova',
        fontSize: 11,
        position: 'absolute',
        top: 25,
        left: 10,
    },
    organization:{
        fontFamily: 'proxima-nova',
        fontSize: 11,
        position: 'absolute',
        top: 80,
        left: 10,
    },
    title:{
        fontFamily: 'proxima-nova',
        fontSize: 32,
        color: '#10164D',
        top: 40,
        left: 10,
    },
    attendance:{
        position: 'absolute',
        backgroundColor: '#E6FFE3',
        borderColor: '#10C400',
        borderWidth: 1,
        borderRadius: 10,
        width: 92,
        height: 20,
        left: 20,
        top: 125,
    },
    text:{
        textAlign: 'center',
    }
})

export default Card;